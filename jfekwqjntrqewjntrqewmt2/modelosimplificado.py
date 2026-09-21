# =====================================================
# MODELO SIMPLIFICADO: Análisis de anglicismos
# Inspirado en Giménez Folqués (2021)
# =====================================================

corpus = [
    {"texto": "El email llegó con el informe completo.", 
     "tipo": "libro", "region": "España", "fuente": "Manual de comunicación empresarial"},
    {"texto": "Envíame el email cuando termines el trabajo.", 
     "tipo": "periódico", "region": "América", "fuente": "El Comercio (Lima)"},
    {"texto": "Usamos software de última generación en la empresa.", 
     "tipo": "revista", "region": "España", "fuente": "PC World"},
    {"texto": "El smartphone ha cambiado nuestra forma de comunicarnos.", 
     "tipo": "libro", "region": "América", "fuente": "Tecnología y sociedad"},
    {"texto": "Prefiero usar el correo electrónico en lugar de email.", 
     "tipo": "periódico", "region": "España", "fuente": "El País"},
    {"texto": "El hashtag del evento fue trending topic mundial.", 
     "tipo": "revista", "region": "América", "fuente": "Revista Digital"},
    {"texto": "Descargué el software desde la página oficial.", 
     "tipo": "guión", "region": "España", "fuente": "Transcripción radio"},
    {"texto": "Mi smartphone se actualizó automáticamente.", 
     "tipo": "periódico", "region": "América", "fuente": "La República"},
]

cont_anglicismo = 0
analisis = {"libro": 0, "periódico": 0, "revista": 0, "guión": 0}

for item in corpus:
    texto_lower = item["texto"].lower()
    tipo = item["tipo"]
    
    if any(palabra in texto_lower for palabra in ["email", "software", "smartphone", "hashtag"]):
        cont_anglicismo += 1
        analisis[tipo] += 1
        print(f"[+] Anglicismo encontrado → {tipo} ({item['region']}) - {item['fuente']}")

print("\n=== RESULTADOS DEL MODELO SIMPLIFICADO ===")
print(f"Total de textos analizados: {len(corpus)}")
print(f"Total de anglicismos detectados: {cont_anglicismo}\n")

print("Distribución por tipo de fuente:")
for tipo, cantidad in analisis.items():
    if cantidad > 0:
        print(f"  • {tipo.capitalize():<10}: {cantidad} apariciones")