import json
import math
from re import M
import pandas as pd
from pandas_geojson import to_geojson, write_geojson
import numpy as np

INPUT_PATH = "./data/poi.csv"
OUT_PATH = "./src/poi.json"
if __name__ == "__main__":
    df = pd.read_csv(INPUT_PATH)
    df["latitude"] = df["latitude_radian"].apply(lambda x: math.degrees(x))
    df["longitude"] = df["longitude_radian"].apply(lambda x: math.degrees(x))

    poi_df = df[["name", "latitude", "longitude", "categories"]]
    #print(poi_df)
    dict_list = []
    for i in range(len(poi_df)):
        entry = {
            "name": poi_df.iloc[i]["name"],
            "coords:": {"lat": round(poi_df.iloc[i].latitude, 6),"lng": round(poi_df.iloc[i].longitude, 6)},
            "categories": poi_df.iloc[i].categories
        }
        dict_list.append(entry)
    with open(OUT_PATH, "w") as sink:
        json.dump(dict_list, sink, indent = 4)
