import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  // Função para abrir o perfil do LinkedIn
  const LinkedInlink = async () => {
    // Exemplo de uso
    const profileId = "josé-miguel-gomes-de-oliveira-3a5aab2ba"; // Substitua pelo ID do perfil desejado
    try {
      const linkedInUrl = `linkedin://profile/${profileId}`;
      const isInstalled = await Linking.canOpenURL(linkedInUrl);

      if (isInstalled) {
        await Linking.openURL(linkedInUrl);
      } else {
        // Se o aplicativo não estiver instalado, redirecione para o perfil na web
        const webUrl = `https://www.linkedin.com/in/${profileId}`;
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      console.error("Erro ao abrir o perfil do LinkedIn:", error);
    }
  };
  const GitHubLink = async () => {
    const githubUrl = "https://github.com/jmmjml"; // Substitua com o URL do seu repositório
    const supported = await Linking.canOpenURL(githubUrl);
    if (supported) {
      await Linking.openURL(githubUrl);
    } else {
      console.error(`Não é possível abrir o URL: ${githubUrl}`);
    }
  };
  const WhatsAppLink = async () => {
    const phoneNumber = "5518996967897"; // Substitua pelo número de telefone no formato internacional
    const message = "Oi"; // Substitua pela mensagem que deseja enviar
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    const supported = await Linking.canOpenURL(whatsappUrl);
    if (supported) {
      await Linking.openURL(whatsappUrl);
    } else {
      console.error(`Não é possível abrir o URL do WhatsApp: ${whatsappUrl}`);
    }
  };
  const TelegramLink = async () => {
    const telegramUrl = "https://t.me/Jmmjml";
    try {
      await Linking.openURL(telegramUrl);
    } catch (error) {
      console.error("Erro ao abrir o link do Telegram:", error);
    }
  };
  const InstagramLink = async () => {
    const instagramUrl = "instagram://user?username=jmmjml";
    try {
      await Linking.openURL(instagramUrl);
    } catch (error) {
      console.error("Erro ao abrir o link do Instagram:", error);
    }
  };
  const DiscordLink = async () => {
    const discordUrl = "https://discord.com/channels/@jmmjml";
    try {
      await Linking.openURL(discordUrl);
    } catch (error) {
      console.error("Erro ao abrir o link do Discord:", error);
    }
  };
  const TikTokLink = async () => {
    const tiktokUrl = "https://www.tiktok.com/@jmmjml1255?_t=8dukcmrgf7u&_r=1";
    try {
      await Linking.openURL(tiktokUrl);
    } catch (error) {
      console.error("Erro ao abrir o link do TikTok:", error);
    }
  };
  // Função para abrir o cliente de e-mail do Gmail
  const AbrirGmailApp = async () => {
    const email = "jmiguelgoliveira@gmail.com"; // Endereço de e-mail do destinatário
    const subject = "Mensagem de contato"; // Assunto do e-mail (opcional)
    const body = "Prazer, preciso falar com você"; // Corpo do e-mail (opcional)

    const url = `mailto:${email}?subject=${subject}&body=${body}`;

    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error("Erro ao abrir o cliente de e-mail:", error);
    }
  };
  // Função para fazer uma chamada telefônica
  const fazerChamada = async () => {
    // Exemplo de uso
    const numero = "18996967897"; // Substitua pelo número desejado
    const url = `tel:${numero}`;
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error("Erro ao abrir o cliente de telefone:", error);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1D3E9", dark: "#A1D3E9" }}
      headerImage={
        <Image
          source={require("@/assets/images/redes2.png")}
          style={styles.reactLogo}
        />
      }
    >
      <LinearGradient
        colors={["#A1D1E9", "transparent"]}
        style={styles.background}
      />
      <ThemedView style={styles.meio}>
        <Image
          source={require("@/assets/images/eu.jpg")}
          style={styles.eu}
          resizeMode="cover"
          blurRadius={10}
        />
        <Image
          source={require("@/assets/images/eu.jpg")}
          style={styles.eu2}
          resizeMode="cover"
        />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">José Miguel</ThemedText>
      </ThemedView>
      <ThemedView style={styles.divbotao}>
        <TouchableOpacity style={styles.botao} onPress={LinkedInlink}>
          <ThemedView style={styles.fotobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.fotobotao}
            >
              <Image
                source={require("@/assets/images/linkedin.png")}
                style={styles.imagembotao}
              />
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.divtextobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.divtextobotao}
            >
              <ThemedText style={styles.textobotao}>LinkedIn</ThemedText>
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.partevaziabotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.partevaziabotao}
            >
              <ThemedText></ThemedText>
            </LinearGradient>
          </ThemedView>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={GitHubLink}>
          <ThemedView style={styles.fotobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.fotobotao}
            >
              <Image
                source={require("@/assets/images/github.png")}
                style={styles.imagembotao}
              />
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.divtextobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.divtextobotao}
            >
              <ThemedText style={styles.textobotao}>GitHub</ThemedText>
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.partevaziabotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.partevaziabotao}
            >
              <ThemedText></ThemedText>
            </LinearGradient>
          </ThemedView>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={WhatsAppLink}>
          <ThemedView style={styles.fotobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.fotobotao}
            >
              <Image
                source={require("@/assets/images/whats.png")}
                style={styles.imagembotao}
              />
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.divtextobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.divtextobotao}
            >
              <ThemedText style={styles.textobotao}>WhatsApp</ThemedText>
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.partevaziabotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.partevaziabotao}
            >
              <ThemedText></ThemedText>
            </LinearGradient>
          </ThemedView>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={TelegramLink}>
          <ThemedView style={styles.fotobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.fotobotao}
            >
              <Image
                source={require("@/assets/images/telegram.png")}
                style={styles.imagembotao}
              />
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.divtextobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.divtextobotao}
            >
              <ThemedText style={styles.textobotao}>Telegram</ThemedText>
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.partevaziabotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.partevaziabotao}
            >
              <ThemedText></ThemedText>
            </LinearGradient>
          </ThemedView>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={InstagramLink}>
          <ThemedView style={styles.fotobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.fotobotao}
            >
              <Image
                source={require("@/assets/images/insta.png")}
                style={styles.imagembotao}
              />
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.divtextobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.divtextobotao}
            >
              <ThemedText style={styles.textobotao}>Instagram</ThemedText>
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.partevaziabotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.partevaziabotao}
            >
              <ThemedText></ThemedText>
            </LinearGradient>
          </ThemedView>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={DiscordLink}>
          <ThemedView style={styles.fotobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.fotobotao}
            >
              <Image
                source={require("@/assets/images/discord.png")}
                style={styles.imagembotao}
              />
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.divtextobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.divtextobotao}
            >
              <ThemedText style={styles.textobotao}>Discord</ThemedText>
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.partevaziabotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.partevaziabotao}
            >
              <ThemedText></ThemedText>
            </LinearGradient>
          </ThemedView>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={TikTokLink}>
          <ThemedView style={styles.fotobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.fotobotao}
            >
              <Image
                source={require("@/assets/images/tiktok.png")}
                style={styles.imagembotao}
              />
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.divtextobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.divtextobotao}
            >
              <ThemedText style={styles.textobotao}>TikTok</ThemedText>
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.partevaziabotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.partevaziabotao}
            >
              <ThemedText></ThemedText>
            </LinearGradient>
          </ThemedView>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={AbrirGmailApp}>
          <ThemedView style={styles.fotobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.fotobotao}
            >
              <Image
                source={require("@/assets/images/gmail.png")}
                style={styles.imagembotao}
              />
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.divtextobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.divtextobotao}
            >
              <ThemedText style={styles.textobotao}>Gmail</ThemedText>
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.partevaziabotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.partevaziabotao}
            >
              <ThemedText></ThemedText>
            </LinearGradient>
          </ThemedView>
        </TouchableOpacity>
        <TouchableOpacity onPress={fazerChamada} style={styles.botao}>
          <ThemedView style={styles.fotobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.fotobotao}
            >
              <Image
                source={require("@/assets/images/telefone.png")}
                style={styles.imagembotao}
              />
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.divtextobotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.divtextobotao}
            >
              <ThemedText style={styles.textobotao}>Telefone</ThemedText>
            </LinearGradient>
          </ThemedView>
          <ThemedView style={styles.partevaziabotao}>
            <LinearGradient
              colors={["#A1D1E9", "#231651"]}
              style={styles.partevaziabotao}
            >
              <ThemedText></ThemedText>
            </LinearGradient>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: "transparent",
  },
  divbotao: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
    backgroundColor: "transparent",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  botao: {
    flexDirection: "row",
    backgroundColor: "#ffff",
    borderColor: "#ffff",
    height: 62,
    width: 292,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  imagembotao: {
    height: 60,
    width: 60,
    backgroundColor: "transparent",
  },
  fotobotao: {
    height: 60,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "gray",
    // borderRadius: 100,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  partevaziabotao: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "gray",
    // borderRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  divtextobotao: {
    height: 60,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "gray",
  },
  textobotao: {
    fontWeight: "bold",
    fontSize: 20,
  },
  reactLogo: {
    height: 290,
    width: 290,
    bottom: -53,
    left: 50,
    position: "absolute",
  },
  eu: {
    height: 155,
    width: 155,
    borderRadius: 100,
    bottom: 0,
    left: 74,
  },
  eu2: {
    height: 140,
    width: 140,
    borderRadius: 100,
    bottom: 0,
    left: -75,
  },
  meio: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
});
