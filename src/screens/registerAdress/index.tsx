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

export function RegisterAdress(){
    const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate('RegisterPerfilImage');
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
                    Para comecar, insira seu endereco 
                </Text>
                
                <TextInput style={styles.input} placeholder="Cidada, estado, pais"
                    keyboardType='default'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>
                <Text style={styles.label}>
                   CEP * 
                </Text>
                <TextInput style={styles.input} placeholder="Insira seu CEP"
                    keyboardType='number-pad'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>
                <Text style={styles.label}>
                    Endereco * 
                </Text>
                <TextInput style={styles.input} placeholder="Insira seu endereco"
                    keyboardType='default'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                    secureTextEntry
                ></TextInput>
                <Text style={styles.label}>
                    Numero * 
                </Text>
                <TextInput style={styles.input} placeholder="Insira sua senha"
                    keyboardType='number-pad'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={6}
                    secureTextEntry
                ></TextInput>
                <Text style={styles.label}>
                    Complemento * 
                </Text>
                <TextInput style={styles.input} placeholder="Insira seu complemento"
                    keyboardType='default'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
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