import json

coins = 0
level = 1

def tap():
    global coins
    coins += level
    print(f"Монеты: {coins}")

def upgrade():
    global coins, level
    if coins >= 10:
        coins -= 10
        level += 1
        print(f"Уровень дерева: {level}")
    else:
        print("Недостаточно монет!")

def boost():
    global coins
    print("Вы посмотрели рекламу! 10 кликов дают x2.")
    for i in range(10):
        coins += level * 2
    print(f"Монеты: {coins}")

def save():
    with open("crypto_tree.json", "w") as f:
        json.dump({"coins": coins, "level": level}, f)
    print("Прогресс сохранён!")

def load():
    global coins, level
    try:
        with open("crypto_tree.json", "r") as f:
            data = json.load(f)
            coins, level = data["coins"], data["level"]
        print("Прогресс загружен!")
    except FileNotFoundError:
        print("Нет сохранений.")

while True:
    cmd = input("Введите команду (tap/upgrade/boost/save/load/exit): ")
    if cmd == "tap": tap()
    elif cmd == "upgrade": upgrade()
    elif cmd == "boost": boost()
    elif cmd == "save": save()
    elif cmd == "load": load()
    elif cmd == "exit": break