# art-max-ionic
Ionic - Build iOS, Android &amp; Web Apps with Ionic &amp; Angular - Tutorial from Maximilian Schwarzmüller (Udemy)

####  Section 1: Getting Started

#####  7. Our First Ionic App!

-  `npm install -g ionic`
-  `ionic start`
    -  name: `ionic-angular-course`
    -  Starter template: blank
-  `cd ionic-angular-course`
-  `ionic serve`

####  Section 4: Angular + Ionic

#####  73. Adding & Loading a New Page

-  `ionic generate` -> `page`
   -  name: `recipes`

####  Section 5: Building Native Apps with Capacitor

#####  88. Creating an Android App

Follow the instruction [Android Development](https://ionicframework.com/docs/developing/android)
1. Install Android Studio
2. Configure Command Line Tools
   - add environment variables  
   - ANDROID_SDK_ROOT: %USERPROFILE%\AppData\Local\Android\Sdk
   - add to  PATH `$ANDROID_SDK_ROOT/tools/bin` (`%ANDROID_SDK_ROOT%\tools\bin` in Windows)
   - add to  PATH `$ANDROID_SDK_ROOT/platform-tools` (`%ANDROID_SDK_ROOT%\platform-tools` in Windows)
   - add to  PATH `$ANDROID_SDK_ROOT/emulator` (`%ANDROID_SDK_ROOT%\emulator` in Windows)
3. Create an Android Virtual Device
4. Build native project
   - `ng build`
   - `ionic capacitor add android`
   - had an error
     - `error: unknown option '--npm-client'`
     - fixed by
     - npm uninstall -g ionic
     - npm install -g @ionic/cli@latest
5. Fix appId
   - in `capacitor.config.ts` modify
   - appId: 'net.shyshkin.ionic_course'
6. Running with Capacitor
   - `ionic capacitor copy android`
   - `ionic capacitor run android` 
     - Which device... (no devices) -> got an error
   - solution
   - `ionic capacitor sync`
   - `ionic capacitor open android`
   - Run in Android Studio

#####  89. Running the App on a Real Android Device

1. [Configure on-device developer options](https://developer.android.com/studio/debug/dev-options)
2. Open Project in Android Studio
   - `ionic capacitor open android`
3. Choose device and run   

####  Section 6: Debugging

#####  99. Debugging Android Apps

1. Run app in simulator
   - `ionic capacitor sync`
   - `ionic capacitor open android`
   - Run
   - View Run and Logcat in Android Studio
   - **or**
   - `ionic capacitor run android -l --host=192.168.1.154`
2. In Chrome
   - `chrome://inspect`
   - find device -> inspect
   - Available Dev Tools
     - Network
     - Sources
     - Performance
     - Memory
     - Debug

####  Section 9: Styling & Theming Ionic Apps

#####  156. Setting All Colors at Once

Use [Color Generator](https://ionicframework.com/docs/theming/color-generator)


