var menu_items = {
    "items": [
        {
            "type": "poutine",
            "name": "Poutine Regulier",
            "image": "images/poutine.png",
            "description": "Frite + fromage + sauce. (Gluten friendly)<br>\
                <br>\
                Petit ...... $6.00<br>\
                Grand ...... $9.00<br>\
            ",
            "ingredients": "",
            "cost": "À partir de $6.00",
            "extras": []
        },
        {
            "type": "poutine",
            "name": "Poutine au Poulet",
            "image": "images/poutine.png",
            "description": "Frite + fromage + 2 morceaux crispy + sauce. (Gluten friendly)<br>\
                <br>\
                Grand ...... $13.00<br>\
            ",
            "ingredients": "",
            "cost": "$13",
            "extras": [
                {
                    "description": "1 morceau Crispy",
                    "cost": "$2.00"
                }
            ]
        },
        {
            "type": "falafel",
            "name": "Assiette Falafel",
            "image": "images/af3_200.png",
            "description": "4 morceaux Falafel + Patate à L'ail + Salade (4 ingrédients au choix) + Sauce Ranch maison + Sauce à l'ail \
                + Sauce Tahini + Cornichons et/ou Navet.",
            "ingredients": "Ingrédients: Laitue, Concombre, Tomate, Mais, Oignon, Poivron.",
            "cost": "$11",
            "extras": [
                {
                    "description": "1 morceau Falafel",
                    "cost": "$1"
                },
                {
                    "description": "1 ingrédient de plus",
                    "cost": "$1.00"
                },
                {
                    "description": "1 boisson",
                    "cost": "$1.50"
                }
            ]
        },
        {
            "type": "crispy",
            "name": "Assiette Crispy",
            "image": "images/ac1_200.png",
            "description": "2-3 morceaux Crispy (~150g) + Patate à L'ail + Salade (4 ingrédients au choix) + Sauce Ranch maison + \
                Sauce à l'ail + Cornichons et/ou Navet.",
            "ingredients": "Ingrédients: Laitue, Concombre, Tomate, Mais, Oignon, Poivron.",
            "cost": "$13",
            "extras": [
                {
                    "description": "1 morceau Crispy",
                    "cost": "$2.00"
                },
                {
                    "description": "1 ingrédient de plus",
                    "cost": "$1.00"
                },
                {
                    "description": "1 boisson",
                    "cost": "$1.50"
                }
            ]
        },
        {
            "type": "falafel",
            "name": "Pita Falafel",
            "image": "images/sf_200.jpg",
            "description": "\
                Pita ...... $6.00<br>\
                Pita + boisson ...... $7.00<br>\
                <br>\
                Trios ...... $9.50<br>\
                (Pita + boisson + votre choix:<br>\
                Salade, Frite, ou Patate à l'ail)\
                ",
            "ingredients": "",
            "cost": "$6",
            "extras": [
                
            ]
        },
        {
            "type": "crispy",
            "name": "Wrap Crispy",
            "image": "images/wc_200.jpg",
            "description": "\
                Wrap ...... $7<br>\
                Wrap + boisson ...... $8<br>\
                <br>\
                Trios ...... $11.00<br>\
                (Wrap + boisson + votre choix:<br>\
                Salade, Salade de choux, Frite, ou Patate à l'ail)\
                ",
            "ingredients": "",
            "cost": "$7",
            "extras": [
                
            ]
        },
        {
            "type": "falafel",
            "name": "Morceaux Falafel",
            "image": "images/df_200.png",
            "description": "\
                6 morceaux ...... $6.00<br>\
                12 morceaux ...... $11.00<br>\
                24 morceaux ...... $20.00<br>\
                (Servis avec sauce Tahini)<br>\
                ",
            "ingredients": "",
            "cost": "À partir de $6.00",
            "extras": []
        },
        {
            "type": "crispy",
            "name": "Morceaux Crispy",
            "image": "images/mc_200.png",
            "description": "\
                1/2 Kilo (6-8 gros morceaux) ...... $17.00<br>\
                1 Kilo (13-15 gros morceaux) ...... $32.00<br>\
                (Servis avec sauce à l'ail)<br>\
                ",
            "ingredients": "",
            "cost": "À partir de $17.00",
            "extras": []
        },
        {
            "type": "crevettes",
            "name": "Crevettes Croustillantes",
            "image": "images/crevettes.png",
            "description": "\
                Morceaux crevettes de taille 16-20 (Gluten friendly)<br>\
                <br>\
                6 morceaux ...... $7.00<br>\
                12 morceaux ...... $12.00<br>\
                (Servis avec sauce cocktail)<br>\
                ",
            "ingredients": "",
            "cost": "À partir de $7.00",
            "extras": []
        },
        {
            "type": "extra",
            "name": "Patates Frites",
            "image": "images/frites_200.png",
            "description": "\
                Petit ...... $5.00<br>\
                Grand ...... $9.00<br>\
                ",
            "ingredients": "",
            "cost": "À partir de $5.00",
            "extras": []
        },
        {
            "type": "extra",
            "name": "Patates à l'ail",
            "image": "images/pa_200.png",
            "description": "\
                Petit ...... $5.00<br>\
                Grand ...... $10.00<br>\
                ",
            "ingredients": "",
            "cost": "À partir de $5.00",
            "extras": []
        },
        {
            "type": "extra",
            "name": "Salade de Choux",
            "image": "images/choux1_200.png",
            "description": "\
                Petit ...... $4.00<br>\
                Grand ...... $8.00<br>\
                ",
            "ingredients": "",
            "cost": "À partir de $4.00",
            "extras": []
        },
        {
            "type": "extra",
            "name": "Salade Maison",
            "image": "images/salade_200.png",
            "description": "\
                Avec sauce Ranch maison.<br>\
                Petit ...... $4.50<br>\
                Grand ...... $10.00<br>\
                ",
            "ingredients": "",
            "cost": "À partir de $4.50",
            "extras": []
        },
        {
            "type": "boisson",
            "name": "Boisson",
            "image": "images/pc_cola_200.png",
            "description": "\
                PC Cola, PC Spritz, PC Ginger<br>\
                PC Lemonade, Selection Orange, Eau<br>\
                PC Soda Ginger<br>\
                ",
            "ingredients": "",
            "cost": "$1.50",
            "extras": []
        },
        {
            "type": "extra",
            "name": "Sauces",
            "image": "images/sauces_200.png",
            "description": "\
                Sauce à l'ail (60ml) ...... $1.00<br>\
                Sauce Tahini (60ml) ...... $1.00<br>\
                Sauce Moutard et Miel (60ml) ...... $1.50<br>\
                Sauce Cocktail (60ml) ...... $1.50<br>\
                Sauce Ranch Maison (60ml) ...... $1.50<br>\
                ",
            "ingredients": "",
            "cost": "À partir de $1.00",
            "extras": []
        }
    ]
}