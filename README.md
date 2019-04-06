# ava_tour

a React Native App (in development) for customised Sightseeing Tours around Munich. 

# How to run it

- Clone the project

- Run `cd ava_tour`

- Run `npm install`

- Run `npm start`

  - To see the app with live reloading you can either scanning the QR-Code in terminal/website or starting an iOS simulator/       Android emulator (need to install it before)
  
- enjoy:)



# Troubleshooting

from time to time you may see this error when starting the app:

     Error running `xcrun simctl openurl booted exp://127.0.0.1:19000`: An error was encountered processing the command            (domain=NSPOSIXErrorDomain, code=60): The operation couldn’t be completed. Operation timed out Operation timed out

to overcome this you have to delete the app cache from expo. You can eigther run the  clean_caches script ordelet the ./expo/cash/* folder
