import requests

UNITS_BEING_SOLD = 10

ACCESS_TOKEN = "44aea5eaf148dbabee4236553f2d805ae9b4c0aca241db9a56d867c3eb718419118bf8ccd9a0b9d40106cedde24a62a0"
INV_ADJUST = 1000
TOTAL_ADJUST = 1

commercialID1x1 = "5bc22e50871b051400ac184a"
commercialID2x1 = "5bc22df4871b051400ac1848"
bongID2x1 = "5bc229b60581f91400aa2495"
bongID1x1 = "5bc22b89dde132140084f946"
personalID2x1 = "5b984a891317ce140016e145"
personalID1x1 = "5bc227960581f91400aa2489"

headers = {
    'Content-Type': 'application/json',
    'Authorization': ACCESS_TOKEN
}


# make the function to get the inventory
# Calculate how many sold of each one using INV_ADJUST
# Sum them all
# Adjust by +1
# Rewrite the javascript so it shows it or have the JS read a file

def get_inventory(productID):
    full_l = 'https://api.trycelery.com/v2/products/' + productID
    response = requests.get(full_l, headers=headers)
    jaySon = response.json()
    inventory = jaySon['data']['inventory']
    return inventory

soldPersonal2x1 = INV_ADJUST - get_inventory(commercialID1x1)
soldPersonal1x1 = INV_ADJUST - get_inventory(commercialID2x1)
soldBong2x1 = INV_ADJUST - get_inventory(bongID2x1)
soldBong1x1 = INV_ADJUST - get_inventory(bongID1x1)
soldCommercial2x1 = INV_ADJUST - get_inventory(personalID2x1)
soldCommercial1x1 = INV_ADJUST - get_inventory(personalID1x1)

totalSold = soldPersonal2x1 + soldPersonal1x1 + soldBong2x1 + soldBong1x1 + soldCommercial2x1 + soldCommercial1x1 + TOTAL_ADJUST

#resultsDic = {"UnitsForSale": UNITS_BEING_SOLD,"totalSold" : totalSold}

f = open("scripts/imports.js", "w")
first_line = "const units_being_sold = " + str(UNITS_BEING_SOLD) + ";"
second_line = "const totalUnitsSold = " + str(totalSold) + ";"
f.write(first_line+'\n'+second_line)
f.close()