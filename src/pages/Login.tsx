import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { logInOutline } from "ionicons/icons";
import React from "react";

const Login: React.FC = () => {
  const doLogin = (event: any) => {
    event.preventDefault();
    console.log("dologin");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>Page Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <form onSubmit={doLogin}>
              <IonInput
                fill="outline"
                labelPlacement="floating"
                type="email"
                label="Email"
                placeholder="example@example.com"
              ></IonInput>
              <IonInput
                className="ion-margin-top"
                fill="outline"
                labelPlacement="floating"
                type="password"
                label="Password"
                placeholder="***"
              ></IonInput>
              <IonButton
                className="ion-margin-top"
                type="submit"
                expand="block"
              >
                Login
                <IonIcon icon={logInOutline} slot="end" />
              </IonButton>
              <IonButton
                routerLink="/register"
                color={"secondary"}
                className="ion-margin-top"
                type="submit"
                expand="block"
              >
                Create a count
              </IonButton>
              
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
