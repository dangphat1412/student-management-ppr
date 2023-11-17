import requests
from bs4 import BeautifulSoup

def crawl(url):
    response = requests.get(url)
    
    if response.status_code == 200:
        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(response.text, 'html.parser')

        table = soup.find('table')
        with open('output.txt', 'a') as file:
            rows = table.find_all('tr')
            for row in rows[1:]:  # Skip the header row (index 0)
                columns = row.find_all('td')
                if columns:
                    student_id = columns[0].text
                    student_code = columns[1].text
                    first_name = columns[2].text
                    last_name = columns[3].text
                    email = columns[4].text
                    dob = columns[5].text
                    country = columns[6].text
                    score = columns[7].text

                    file.write(f"Student ID: {student_id}\n")
                    file.write(f"Student Code: {student_code}\n")
                    file.write(f"First Name: {first_name}\n")
                    file.write(f"Last Name: {last_name}\n")
                    file.write(f"Email: {email}\n")
                    file.write(f"Date of Birth: {dob}\n")
                    file.write(f"Country: {country}\n")
                    file.write(f"Score: {score}\n")
                    file.write('\n')
    else:
        print(f"Failed to retrieve the page. Status code: {response.status_code}")


url = 'http://127.0.0.1:5001/home'
crawl(url)