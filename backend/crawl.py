import requests
from bs4 import BeautifulSoup

def crawl(url):
    response = requests.get(url)
    
    if response.status_code == 200:
        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(response.text, 'html.parser')

        names = soup.find_all('p')
        with open('output.txt', 'a') as file:
            for name in names:
               #print(name.get_text())
               file.write(name.get_text() + '\n')
    else:
        print(f"Failed to retrieve the page. Status code: {response.status_code}")


url = 'http://127.0.0.1:5000'
crawl(url)