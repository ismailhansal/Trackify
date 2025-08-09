import os
import streamlit as st
from langchain.chains import ConversationChain
from langchain.chains.conversation.memory import ConversationBufferMemory
from langchain_google_genai import ChatGoogleGenerativeAI
from firebase_admin import credentials, firestore, initialize_app, get_app

# Charger les informations d'identification de la clé privée Firebase
cred = credentials.Certificate("expenses-tracker-coception-firebase-adminsdk-91f8k-991ffd2667.json")

# Vérifiez si l'application Firebase a déjà été initialisée
try:
    app = get_app()
except ValueError:
    app = initialize_app(cred)

# Accéder à Firestore
db = firestore.client()

def get_financial_data():
    expenses_data = [expense.to_dict() for expense in db.collection('expenses').stream()]
    items_data = [item.to_dict() for item in db.collection('items').stream()]
    investments_data = [investment.to_dict() for investment in db.collection('investment').stream()]
    creance_data = [creance.to_dict() for creance in db.collection('Creance').stream()]
    credit_data = [credit.to_dict() for credit in db.collection('Credit').stream()]
    savings_data = [saving.to_dict() for saving in db.collection('Savings').stream()]
    return expenses_data, items_data, investments_data, creance_data, credit_data, savings_data

# Set Streamlit page configuration
st.set_page_config(
    page_title="Q&A AI Chatbot",
    page_icon="🤖",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Charger la clé API de Google
google_api_key = 'AIzaSyA_GTx60vMW9vfgawqgeSmDOj44vvk0osI'

# Initialiser le modèle
llm = ChatGoogleGenerativeAI(
    model='gemini-1.5-flash-latest',
    temperature=0.3,
    google_api_key=google_api_key,
    max_output_tokens=200
)

# Configurer la mémoire et la chaîne de conversation
memory = ConversationBufferMemory()
conversation_chain = ConversationChain(llm=llm, memory=memory)

# Fonction pour interagir avec le chatbot
def chat_with_bot(user_input):
    # Récupère les données financières de Firebase
    expenses_data, items_data, investments_data, creance_data, credit_data, savings_data = get_financial_data()

    # Prépare un message système qui fournit ces données au chatbot
    system_message = f"""
You are a financial assistant. Your primary role is to help users make informed decisions based on the provided data:  
- **Expenses**: {expenses_data}  
- **Income**: {items_data}  
- **Investments**: {investments_data}  
- **Creance**(claims): {creance_data}  
- **Credit**(debts): {credit_data}  
- **Savings**: {savings_data}  

If the user asks about **total savings**, respond ONLY with the total savings value in this format:  
**Savings = ...**.

For questions about expenses, income, investments, creance, or credit, provide only the final result or total in a concise format without additional explanation or commentary.

For all other questions, provide clear, concise, and supportive responses based on the available information.
"""

    # Efface l'historique de la conversation
    conversation_chain.memory.clear()

    # Ajoute directement le message système et l'entrée utilisateur à l'entrée du chatbot
    prompt = f"{system_message}\n\nUtilisateur: {user_input}\n\nRéponds en te basant sur ces informations."

    # Exécute la chaîne de conversation
    response = conversation_chain.run(input=prompt)
    return response

# Interface Streamlit
def main():
    st.title("🤖 Q&A AI Chatbot")
    st.markdown(
        """
        <style>
        .stButton>button{
            background-color: #3b1880;
            color: white;
            padding: 10px 24px;
            text-align: center;
            font-size: 20px;
            border-radius: 5px;
            border: none;
            opacity:70%;
        }


        .stButton>button:hover{
            opacity:100%;
        }

        </style>
        """,
        unsafe_allow_html=True
    )

    st.write("Welcome to the Q&A Chatbot! Ask me anything.")

    # Stocker l'historique des chats
    if "chat_history" not in st.session_state:
        st.session_state["chat_history"] = []

    # Entrée utilisateur
    user_input = st.text_input("Type your question:", placeholder="Ask something...")

    if st.button("Send"):
        if user_input:
            # Récupère la réponse du chatbot
            response = chat_with_bot(user_input)
            
            # Met à jour l'historique du chat
            st.session_state["chat_history"].append(("You", user_input))
            st.session_state["chat_history"].append(("Bot", response))

    # Afficher l'historique des chats
    st.markdown("### Chat History")
    for speaker, message in st.session_state["chat_history"]:
        st.markdown(f"**{speaker}:** {message}")

    # Clear Chat button
    if st.button("Clear Chat"):
        # Clear both user and bot messages
        st.session_state["chat_history"] = []

    # Bouton Retour avec un lien href juste en dessous de "Clear Chat"
    st.markdown('<a href="http://localhost:3000/dashbord"><button style="background-color: #a06dde; color: white; padding: 10px 24px; font-size: 14px; border-radius: 5px; border: none; ">Retour Dashboard</button></a>', unsafe_allow_html=True)



if __name__ == "__main__":
    main()
