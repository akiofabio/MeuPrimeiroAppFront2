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
import Email_Confirmado from '../../assets/Email_Confirmado.png';
import logoSmall from "../../assets/app-name-small.png";
import { Button } from "../../components/Button";
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function ForgotPasswordConfirm(){
    const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate('SignIn');
  }
    return  (
        <View style={styles.container}>
            <Image
                source={logoSmall}
                style={styles.imageLogo}
                resizeMode="stretch"
            />
            
            <View style={styles.content}>
                <Image
                    source={Email_Confirmado}
                    style={styles.image}
                    resizeMode="stretch"
                />
                <Text style={styles.title}>
                    Confira seu e-mail
                </Text>
                <Text style={styles.subtitle}>
                    Enviamos as instruções para seu e-mail{'\n'}
                </Text>
            </View>
            <View style={styles.controlsbutons}>
                <Button
                    title="Entrar"
                    onPress={handleNavigate}
                />
            </View>
        </View>
)}