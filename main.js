document.addEventListener("DOMContentLoaded", async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    
    // Función de escritura rápida
    const typeText = async (elementId, text, speed = 10) => {
        const el = document.getElementById(elementId);
        if (!el) return; // Por seguridad
        for (let char of text) {
            el.innerHTML += char;
            await sleep(speed);
        }
    };

    // 1. Inicia secuencia
    await sleep(300); 

    // 2. Ruta
    await typeText("line1", "> archive://nuwuby.zip");
    await sleep(150);

    // 3. STATUS
    const l2 = document.getElementById("line2");
    if(l2) {
        l2.innerHTML = "[STATUS] :: ";
        await sleep(100);
        const spanWarn = document.createElement("span");
        l2.appendChild(spanWarn);
        for(let char of "partially recovered...") {
            spanWarn.innerHTML += char;
            await sleep(15);
        }
        spanWarn.classList.add("warn-fx");
    }
    await sleep(300);

    // 4. Contador de Integridad 
    const l3 = document.getElementById("line3");
    if(l3) {
        l3.innerHTML = "[FILE INTEGRITY] :: ";
        const spanPerc = document.createElement("span");
        l3.appendChild(spanPerc);
        for(let i = 0; i <= 14; i++) {
            spanPerc.innerHTML = i + "%";
            await sleep(20 + (i * 8)); 
        }
        const cursor = document.createElement("span");
        cursor.classList.add("cursor-fx");
        l3.appendChild(cursor);
    }
    await sleep(200);

    // 5. Emotion Log
    const l4 = document.getElementById("line4");
    if(l4) {
        l4.innerHTML = "[EMOTION LOG] ";
        await sleep(100);
        const spanAlert = document.createElement("span");
        l4.appendChild(spanAlert);
        for(let char of "corrupted") {
            spanAlert.innerHTML += char;
            await sleep(20);
        }
        spanAlert.classList.add("alert-fx"); 
    }
    await sleep(400); 

    // 6. Label y Quote
    await typeText("line5", "last recorded thought:");
    await sleep(100);
    await typeText("line6", "\"i don't remember when i stopped belonging to the ocean.\"");
    await sleep(200);

// 7. Warning final que parpadea cada 7 segundos
    await typeText("line7", "warning: several memories could not be restored.");
    document.getElementById("line7").classList.add("warning-loop");
    
    // 8. Revelamos las foquitas suavemente al final del hackeo
    await sleep(500);
    document.getElementById("seals-container").style.opacity = 1;
});
