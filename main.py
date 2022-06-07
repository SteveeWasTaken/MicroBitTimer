def on_button_pressed_a():
    global time
    if index == indexVal:
        if not (time == 1):
            time = time - 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global time
    if index == indexVal:
        time = time + 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    global logoPress, index
    logoPress = 1
    index = time
    basic.show_icon(IconNames.YES)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

logoPress = 0
indexVal = 0
index = 0
time = 0
textt = "This is text."
basic.show_string(textt)
time = 1
index = indexVal
indexVal = 0

def on_forever():
    global index, logoPress, time
    if logoPress == 1:
        if not (index == 0):
            basic.show_number(index)
            index = index - 1
            basic.pause(60000)
        else:
            logoPress = 0
            time = 1
            basic.show_number(0)
            music.play_melody("C C G G A A G - ", 150)
            music.play_melody("F F E E D D C - ", 150)
            basic.show_number(time)
    else:
        basic.show_number(time)
basic.forever(on_forever)
