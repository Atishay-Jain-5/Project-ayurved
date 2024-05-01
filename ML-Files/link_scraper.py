from bs4 import BeautifulSoup
import json
def scrape_links_from_file(html_file):
    with open(html_file, 'r', encoding='utf-8') as file:
        html_content = file.read()
    
    soup = BeautifulSoup(html_content, 'html.parser')
    nav_items = soup.find_all('li', class_='nav-item dropdown')
    links_list = []
    for item in nav_items:
        links = item.find_all('a')
        for link in links:
            if link.get('href') != "#":
                links_list.append(link.get('href'))
    with open("output_file.json", 'w') as json_file:
        json.dump(links_list, json_file, indent=4)

html_file_path = r"E:\Python\TempScraper\India No.1 Ayurvedic Clinic in Punjab Dr. Sharda Ayurveda.htm" 
scrape_links_from_file(html_file_path)

