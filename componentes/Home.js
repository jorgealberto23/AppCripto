import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";
import { firestore } from "../firebase";
import { collection, onSnapshot, deleteDoc, doc, QuerySnapshot } from "firebase/firestore";

export default function Home({ navigation }) {

    const [criptos, setCriptos] = useState([])

    async function deleteCripto(id) {
        try {
            await deleteDoc(doc(firestore, "tb_moeda", id))
            Alert.alert("A criptomoeda foi deletada.")
        } catch (erro) {
            console.erro("Erro ao deletar.", error)
        }
    }

    useEffect(() => {
        const unsubcribe = onSnapshot(collection(firestore, 'tb_moeda'), (QuerySnapshot) => {
            QuerySnapshot.forEach(() => {
                list.push({ ...doc.data(), id: doc.id });
            })
            setCriptos(lista);
        })
        return () => unsubcribe();
    }, []);

    return (
        <View>
            <View>
                <Text>Lista de Criptomoedas</Text>
            </View>
            <FlatList
                data={criptos}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("Alterar Criptos", {
                                id: item.id,
                                nomeCripto: item.nomeCripto,
                                siglaCripto: item.siglaCripto,
                                valorCripto: item.valorCripto
                            })}>
                                <View>
                                    <Text>Criptomoeda: <Text>{item.nomeCripto}</Text></Text>
                                    <Text>Sigla: <Text>{item.siglaCripto}</Text></Text>
                                    <Text>Valor: <Text>{item.valorCripto}</Text></Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <TouchableOpacity onPress={() => { deleteCripto(iten.id) }}>
                                    X
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
            />
            <TouchableOpacity onPress={() => navigation.navigate("CadastarCriptos")}>
                +
            </TouchableOpacity>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        marginTop: 50,
        fontSize: 30,
    },
    itens: {
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
    },
    titulocriptos: {
        fontSize: 15,
        fontWeight: "bold"
    },
    criptos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#0000cd',
        borderRadius: 10
    },
    botaodeletar: {
        textAlignVertical: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 50,
        position: 'absolute',
        left: 20,
        bottom: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})