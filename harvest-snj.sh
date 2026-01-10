#!/bin/bash
# Harvestoi SNJ:n aluejärjestöt

URLS=(
    "https://www.aurannuuskut.org/"
    "https://esnoutajat.net/"
    "https://www.kaakonnoutajat.net/"
    "https://www.kainuunnoutajat.fi/"
    "http://khn.fi/"
    "https://www.ksnoutajakoirayhdistys.net/"
    "https://www.lakeudennoutajat.fi/"
    "https://www.lapinnuuskut.fi/"
    "https://lpny.yhdistysavain.fi/"
    "https://www.merenkurkunnoutajat.com/"
    "http://www.mantannuuskut.com/"
    "https://www.osn.fi/"
    "https://www.pirkannuusku.net/"
    "https://www.pknoutajat.net/"
    "https://phnuuskut.yhdistysavain.fi/"
    "https://www.salonseudunnoutajat.fi/"
    "https://www.satakunnannoutajat.fi/"
    "https://savon-nuuskut.webnode.fi/"
    "http://www.umn.fi/"
    "http://www.retriever.ax/?firstRef"
    "https://www.chesapeakekerho.fi/"
    "https://www.kiharakerho.net/"
    "https://kpkk.net/"
    "https://www.jkf-pks.fi/"
    "https://www.metsastysnoutajat.com/"
    "https://vakkasuomennoutajat.yhdistysavain.fi/"
)

echo "🐕 Harvestoidaan ${#URLS[@]} SNJ:n jäsenyhdistystä..."
echo ""

count=0
for url in "${URLS[@]}"; do
    count=$((count + 1))
    echo "[$count/${#URLS[@]}] Haetaan: $url"

    # Hae resurssi API:sta
    result=$(curl -s -X POST http://localhost:3000/api/fetch-resource \
        -H "Content-Type: application/json" \
        -d "{\"url\":\"$url\"}")

    # Lisää harvest-jonoon
    if echo "$result" | grep -q '"id"'; then
        echo "$result" | curl -s -X POST http://localhost:3000/api/harvest \
            -H "Content-Type: application/json" \
            -d @- > /dev/null
        echo "  ✅ Lisätty harvest-jonoon"
    else
        echo "  ⚠️  Virhe: $result"
    fi

    # Pieni tauko ettei kuormiteta liikaa
    sleep 1
done

echo ""
echo "✅ Valmis! Tarkista harvest-jono: http://localhost:3000/admin.html"
