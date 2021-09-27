package com.upgrap;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.getcapacitor.community.facebooklogin.FacebookLogin;
import java.util.ArrayList;
import com.getcapacitor.community.fcm.FCMPlugin;
import com.capacitorjs.plugins.camera.CameraPlugin;
import com.capacitorjs.plugins.pushnotifications.PushNotificationsPlugin;
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;
import com.getcapacitor.community.applesignin.SignInWithApple;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      add(FacebookLogin.class);
      add(FCMPlugin.class);
      add(CameraPlugin.class);
      add(PushNotificationsPlugin.class);
      add(GoogleAuth.class);
      add(SignInWithApple.class);
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
    }});
  }
}
