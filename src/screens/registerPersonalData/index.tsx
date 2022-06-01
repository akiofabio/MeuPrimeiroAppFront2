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

export function RegisterPersonalData(){
    const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate('RegisterAdress');
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
                    Insira os seus dados pessoais
                </Text>
                <Text style={styles.label}>
                    Nome *
                </Text>
                <TextInput style={styles.input} placeholder="Insira seu nome"
                    keyboardType='default'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>
                <Text style={styles.label}>
                    Sobremone * 
                </Text>
                <TextInput style={styles.input} placeholder="Insira seu sobrenome"
                    keyboardType='default'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>
                <Text style={styles.label}>
                    Celuar * 
                </Text>
                <TextInput style={styles.input} placeholder="Insira seu celular"
                    keyboardType='number-pad'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={9}
                ></TextInput>
                <Text style={styles.label}>
                    Telefone * 
                </Text>
                <TextInput style={styles.input} placeholder="Insira sua senha"
                    keyboardType='number-pad'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={8}
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