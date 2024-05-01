import csv
import json
from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup

# Function to scrape content using Selenium with Firefox
def scrape_content_with_selenium(url):
    diagnosed = url.split("/")[-1].replace("-"," ").capitalize()
    options = Options()
    options.binary_location = r"C:\Program Files\Mozilla Firefox\firefox.exe"
    service = Service(r'E:\Python\TempScraper\geckodriver.exe')
    driver = webdriver.Firefox(service=service,  options=options)
    
    # Load the webpage
    driver.get(url)
    
    # Extract HTML content after the webpage has fully loaded
    html_content = driver.page_source
    
    # Parse the HTML content
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Find the section with id "treatments/treatment"
    treatments_section = soup.find('section', id='treatments')
    treatment_section = soup.find('section', id='treatment')
    if treatments_section:
        all_elements = treatments_section.find_all(True)
        text_list = [element.get_text().replace('\n', ' ').replace('    ',' ') for element in all_elements]

    elif treatment_section:
        all_elements = treatment_section.find_all(True)
        text_list = [element.get_text().replace('\n', ' ').replace('    ',' ') for element in all_elements]
    
    else:
        print("No section with class 'treatments' found.")
        text_list = ["Couldn't find the treament"]
        
    with open('output.csv', 'a', newline='', encoding='utf-8') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow([url,diagnosed, text_list])
    # Close the webdriver
    driver.quit()

def iterate_links_from_json(output_json_file):
    with open(output_json_file, 'r') as jsonfile:
        data = json.load(jsonfile)
        for url in data:
            print(url)
            scrape_content_with_selenium(url)

output_json_file = "E:\Python\TempScraper\output_file.json"
iterate_links_from_json(output_json_file)


#Optional Header, need to change cookie later
""" 
 headers = {
    "Host": "www.drshardaayurveda.com",
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0",
"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
"Accept-Language": "en-US,en;q=0.5",
"Accept-Encoding": "gzip, deflate, br",
"Referer": "https://www.drshardaayurveda.com/",
"Cookie": r"drshardaayurveda-_zldp=3MjYdccTdQuyjODtGeU7SfTz8aUnU%2FijI%2BL6fuhtUVDvX%2F8p7DyBCsVF3fhEMdKAePY%2BNqbYXuk%3D; XSRF-TOKEN=eyJpdiI6IlNTbnIvTWhsTXdNMno0VzlYb0xQUVE9PSIsInZhbHVlIjoiL0VaM1hCTThXL1hCNGpXQ3lWTXRyQktwYzdLTmpxL1BwcjVWRXNkUlVkamlUak5IRGpBbWRlMGVHdkMwTkczQjlEV3dpZ01WUkVxTzFybGx5UE1nbUFOMG5HdmFYZXUzOVhNcGNXVFhCanhkZkxUNlNMRHBlKzA3SjJpb3RISFYiLCJtYWMiOiI5MGM1ZGE4Njg5MDQ0MTI4N2U5NTlkMjAwM2VkNzIxMzAzYTNiMDlhM2YxZTQzMDNjOTUyZmNjYmI1Yzk1OWY5IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IndDeGJVL0tCRG4rVVBjU1BYSFhERmc9PSIsInZhbHVlIjoiRGt1SWw3RDRjZUl0czhBV1ZGQlV6cW5EZlF3b0QweUhzWDJmWGQxeVl1U0pqQW9QcFV2dFREU0F3dVF3ZThqaTMrVHFLY2JhNTZZWmlMTXlBUG5rY1dTK0tpSWpNbEwzMWRhcWw4OXYxSlEzdG9mODAwOUlKb2IzeGtJUGV1eC8iLCJtYWMiOiI1ZDQ1OTk5MDM5Mjc0YzY3MzkzMmJjY2ZkMjZkYmExNDRmYTI2MmY2ZjFjOGVjOTAyMmI5YjA0MmNmNjk1YjlmIiwidGFnIjoiIn0%3D; drshardaayurveda-_zldt=3516cc1a-38ac-4492-959f-f399390ede7e-0",
"Upgrade-Insecure-Requests": "1",
"Sec-Fetch-Dest": "document",
"Sec-Fetch-Mode": "navigate",
"Sec-Fetch-Site": "same-origin",
"Sec-Fetch-User": "?1"
}
"""