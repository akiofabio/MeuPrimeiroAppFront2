import { StatusBar } from 'expo-status-bar';
import { 
  View, 
  Text, 
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';
import { styles  } from './styles';
import { theme } from '../../global/styles/theme';
import IllustrationImg from '../../assets/Ilustration.png';
import logoSmall from "../../assets/app-name-small.png";
import { Button } from "../../components/Button";
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function Register(){
    const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate('RegisterPersonalData');
  }
    return  (
        <View style={styles.container}>
            <Image
                source={logoSmall}
                style={styles.imageLogo}
                resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Insira os dados da sua conta
                </Text>
                <Text style={styles.label}>
                    E-mail *
                </Text>
                <TextInput style={styles.input} placeholder="Insira seu e-mail"
                    keyboardType='email-address'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>
                <Text style={styles.label}>
                    Nome do usuario * 
                </Text>
                <TextInput style={styles.input} placeholder="Insira o nome do usuario"
                    keyboardType='default'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>
                <Text style={styles.label}>
                    Senha * 
                </Text>
                <TextInput style={styles.input} placeholder="Insira seu senha"
                    keyboardType='number-pad'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={6}
                    secureTextEntry
                ></TextInput>
                <Text style={styles.label}>
                    Confirme a senha * 
                </Text>
                <TextInput style={styles.input} placeholder="Insira sua senha"
                    keyboardType='number-pad'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={6}
                    secureTextEntry
                ></TextInput>


            </View>
            <View style={styles.controlsbutons}>
                <Button
                    title="Continuar"
                    onPress={handleNavigate}
                />
            </View>
        </View>
    )
}