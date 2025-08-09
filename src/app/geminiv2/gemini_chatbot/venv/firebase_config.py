import firebase_admin
from firebase_admin import credentials, firestore

# Remplace par le chemin réel vers ton fichier de clés privées Firebase
cred = credentials.Certificate('expenses-tracker-coception-firebase-adminsdk-91f8k-991ffd2667.json')
firebase_admin.initialize_app(cred)

# Accéder à Firestore
db = firestore.client()

# Exemple de récupération des données depuis la collection 'expenses'
def get_financial_data():
    expenses_ref = db.collection('expenses')  # Remplace 'expenses' par le nom de ta collection
    expenses = expenses_ref.stream()
    
    expenses_data = [expense.to_dict() for expense in expenses]
    return expenses_data
