import os
import re

# Pad naar je bestand met titels
input_file = 'games.txt'
output_folder = 'output'

# Zorg ervoor dat de outputmap bestaat
os.makedirs(output_folder, exist_ok=True)

def create_slug(title):
    # Verwijder speciale tekens en vervang spaties door streepjes
    slug = re.sub(r'[^\w\s-]', '', title)  # Alleen letters, cijfers, spaties en streepjes
    slug = slug.strip().lower()           # Verwijder leading/trailing spaties en maak lowercase
    slug = re.sub(r'[\s]+', '-', slug)    # Vervang spaties door streepjes
    slug = re.sub(r'-+', '-', slug)       # Vervang meerdere streepjes door één streepje
    return slug

# Lees de titels en maak per titel een bestand
with open(input_file, 'r', encoding='utf-8') as f:
    for line in f:
        title = line.strip()
        if title:  # Controleer of de regel niet leeg is
            slug = create_slug(title)
            filename = f"{slug}.txt"
            file_path = os.path.join(output_folder, filename)
            # Schrijf de originele titel naar het bestand
            with open(file_path, 'w', encoding='utf-8') as output_file:
                output_file.write(title)

print(f"Bestanden met slugs zijn opgeslagen in map: {output_folder}")

