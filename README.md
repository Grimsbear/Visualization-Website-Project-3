# **Group 10**

## _Group Members: Ilia, Mai, Martin, & Ryan_

_________________________________________________________________________

## Project 3 Title : Visualization-Website-Project 3

_________________________________________________________________________

# **Overview**
- ### In Project 3, our group created a data visualization rather than a data analysis, and it allows us to show what we've learned in our boot camp class from up to this point of the course! In this project, we've built a website that allows the user to investigate and explore a particular topic by selecting the name of a country. We also built a database and Flask server that works behind the scenes to make the website run smoothly. 

- ### Our group used 2 csv files (the links are provided below), the first is the Unemployment dataset and the second is the Alcohol Consumption both data sets contain data from countries all over the world for the record year 2010.




Links:

- Data 1: https://www.kaggle.com/datasets/mysarahmadbhat/alcohol-consumption

- Data 2: https://www.kaggle.com/datasets/pantanjali/unemployment-dataset

- ### GitHub Link: [Visualization-Website-Project](https://github.com/Grimsbear/Visualization-Website-Project-3)

_________________________________________________________________________

# **Instructions**

## Create Repository

 1. Create a new repository project in GitHub called *Visualization-Website-Project 3*. 

 2. Clone the new repository from GitHub to your computer's desktop then add your notebook files, Data file and your Flask app to the repo.  Remember to commit and push to GitHub regularly.

 ## Clean the data

 1. Open a GitBash (Window) or Terminal (Mac) to the *Visualization-Website-Project 3* repo.
 
 2. Change your python environment to *PythonData38* then launch Jupyter Nootebook by typing 'Jupyter Notebook' and hit Enter.
 
 3. To clean both datasets using jupyter notebook. For the ETL process, we filtered columns in the Unemployment dataset to only use the recorded year 2010 since Alcohol Consumption has only values for the recorded year 2010.

 4. Scrub the data to ensure the country names are matching.  This ensures there is a common key between the two data sets.
 
 5. Merge the two data set using Pandas Dataframe on country name.

 ## Insert data from Pandas DataFrame to PostgreSQL database

 1. To create the database and schema, open PgAdmin to access PostgreSQL
 
 2. Create a database called *AlcoholUnemployment_db*.

 4. In PgAdmin, open a query tool in the database, and then open the *Schema.sql* file from the repository.

 5. Execute the Schema.sql code in the query tool.  This creates the necessary table.

 ## Setup the Flask application

 1. Open app.py in your editor and navigate to the section for connection parameters.

 2. Change your connection parameters to match what your connection parameters are in postgres.

 3. Open your GitBash or Terminal and type ```python app.py```. (*Note : This will not work if the enviroment from earlier isn't still active*)

 4. Observe that the flask server is running on your localhost or http://127.0.0.1:5000/

 5. Open a Google Chrome browser and in the search bar enter ```http://127.0.0.1:5000/```

 6. Observe the website






