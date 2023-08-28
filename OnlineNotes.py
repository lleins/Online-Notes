import smtplib
import ssl
from email.message import EmailMessage
from tkinter import *
import os.path
from os.path import exists
import socket
import platform
from datetime import datetime
from tkinter import scrolledtext  # For Beta Version the password is always "Pass"
import os
import time
import datetime
import requests
from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import json

#Gmail: OnlineNotesSender@gmail.com

#Password: fsdsfsffewffsffsdfs345w343f

#Access Password: qkapbjkalgplwess


#Turn op Flask Server------------------------------------------

#cd C:\Users\Big_T\OneDrive\Desktop\VsCode\Personal Webpage
#set FLASK_APP=OnlineNotes.py
#set FLASK_ENV=development
#flask run

#Turn on Flask Server------------------------------------------

def Email_Valid(Email):
    email_address = Email
    response = requests.get("https://isitarealemail.com/api/email/validate", params={'email': email_address})
    status = response.json()['status']
    if status == "valid":
        return ("Valid")
    elif status == "invalid":
        return ("Not Valid")
    else:
        return("Does Not Exist")


def Send_Email(Email, Body):

    uname = platform.uname()

    hostname = socket.gethostname()
    IPAddr = socket.gethostbyname(hostname)
    email_sender = "OnlineNotesSender@gmail.com"
    email_password = "qkapbjkalgplwess"
    email_receiver = Email

    subject = "Online Notes"

    body = Body

    em = EmailMessage()
    em['From'] = email_sender
    em['To'] = email_receiver
    em['Subject'] = subject
    em.set_content(body)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_receiver, em.as_string())

 
#Server Communication ----------------------------------------------------------





app = Flask(__name__)

CORS(app)

@app.route('/Send_Notes', methods=['POST'])
def process_data():
    data = request.get_json()  # Assuming your JavaScript sends data as JSON

    EmailData = data['Gmail']
    BodyData1 = data['Body1']
    BodyData2 = data['Body2']
    BodyData3 = data['Body3']
    BodyData4 = data['Body4']

    BodyDataTotal = BodyData1+ '\n' + '\n' + BodyData2+ '\n'+ '\n' + BodyData3+ '\n'+ '\n' + BodyData4

    Send_Email(EmailData, BodyDataTotal) #Sends Email with JSON Parsed Data from Flask Server 


    result = {'message': 'Data received successfully and processed!'}
    return jsonify(result)

if __name__ == '__main__':
    app.run()




#Server Communication ----------------------------------------------------------
