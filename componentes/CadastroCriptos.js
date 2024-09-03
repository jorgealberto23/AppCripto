import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function CadastrarCriptos({ navigation }) {

    const [nomeCripto, setnomeCripto] = useState(null);
    const [siglaCripto, setsiglaCripto] = useState(null);
    const [valorCripto, setvalorCripto] = useState(null);

    async function addCripto() {
        try {
            const docRef = await addDoc(collection(firestore, 'tb_moeda'), {
                nomeCripto: nomeCripto,
                siglaCripto: siglaCripto,
                valorCripto: valorCripto
            });
            console.log("Cadastrado com ID: ", docRef.id);
            Alert.alert("Cadastro", "Registros cadastrados com sucesso")
            navigation.navigate("home");
        } catch (error) {
            console.error("Erro ao cadastrar: ", error);
            Alert.alert("Erro", "Erro ao cadastrar . Por favor, tente novamente.");
        }
    }

    return (
        <View style={estilo.container}>
            <View>
                <Text style={estilo.titulo}>Cadastre uma nova Criptomoeda</Text>
            </View>
            <TextInput autoCapitalize="words" style={estilo.input} placeholder="Digite a criptomoeda" onChangeText={setNome} vaule={nome} />
            <TextInput style={estilo.input} placeholder="Digite a Sigla" onChangeText={setSigla} vaule={sigla} />
            <TextInput style={estilo.input} placeholder="Digite o valor" onChangeText={setValor} vaule={valor} />

            <TouchableOpacity style={estilo.bntenviar} onPress={() => {
                addDiario();
            }}>
                <Text style={estilo.bnttxtenviar}> Enviar </Text>
            </TouchableOpacity>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#9ac234',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 15,
        borderRadius: 10,
    },
    btnenviar: {
        marginTop: 20,
    },
    btntxtenviar: {
        fontSize25,
    },
    titulo: {
        marginVertical: 40,
        fontSize: 25,
        textAlign: 'center',
    }
})