#include <Adafruit_NeoPixel.h>
#include <Adafruit_GFX.h>
#ifdef __AVR__
#include <avr/power.h>
#endif

#define PIN 12 
#define NUMPIXELS 7
#define DELAYVAL 500
#define NUM_LEDS 7

Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  Serial.begin(57600);
#if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
#endif
  pixels.begin(); 
  pixels.show();
}

void loop() {
  if (Serial.available() > 0) {
    String input = Serial.readStringUntil('\n');
    int values[28];
    int valuesRead = sscanf(input.c_str(),
      "%d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d %d",
      &values[0], &values[1], &values[2], &values[3], &values[4], &values[5], &values[6], &values[7],
      &values[8], &values[9], &values[10], &values[11], &values[12], &values[13], &values[14], &values[15],
      &values[16], &values[17], &values[18], &values[19], &values[20], &values[21], &values[22], &values[23],
      &values[24], &values[25], &values[26], &values[27]
    );

    if (valuesRead == 28) {
      for (int i = 0; i < 7; i++) {
        int ledNumber = values[i * 4];
        int red = values[i * 4 + 1];
        int green = values[i * 4 + 2];
        int blue = values[i * 4 + 3];
        
        Serial.println(String(ledNumber) + " " + String(red) + " " + String(green) + " " + String(blue));
        pixels.setPixelColor(i, pixels.Color(red, green, blue));
      }
      pixels.show();
    } else {
      Serial.println("Error: Not all values were read.");
    }
  }
}
