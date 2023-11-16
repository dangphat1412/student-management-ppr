import re

def check_null(name):
    if (not (name and name.strip())):
        return True
    else:
        return False

def check_email(email):
    pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b'

    if re.match(pattern, email):
        return True
    else:
        return False
    
def check_score(score):
    pattern = r'^(\d+\.?\d*|\.\d+)$'
    
    if re.match(pattern, str(score)) and 0.0 <= float(score) <= 10.0:
        return True
    else:
        return False
