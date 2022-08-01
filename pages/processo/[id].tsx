// import { processos } from '../../data';
import styles from '../../styles/lawsuitPage.module.scss';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Loading } from '@nextui-org/react';
import { Movimento } from '../../interfaces';

const fetcher = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
        throw new Error(data.message);
    }

    return data;
};

export default function Processo() {
    const { query } = useRouter();
    const { data, error } = useSWR(
        () => query.id && `/api/processos/${query.id}`,
        fetcher
    );

    if (error) return <div className={styles.section}> {error.message}</div>;
    if (!data)
        return (
            <div className={styles.section}>
                <Loading color="success" size="xl" />
            </div>
        );
    console.log(data);
    const lawsuitData = data.data;

    return (
        <main className={styles.section}>
            <div className={styles.container}>
                <div>
                    <h1>
                        Processo n. {lawsuitData.id} do {lawsuitData.tribunal}
                    </h1>
                    <p> {lawsuitData.autuacao}</p>
                </div>
                <div className={styles.details}>
                    <div className={styles.movContainer}>
                        <div className={styles.movHeader}>
                            <h2>Movimentações</h2>
                        </div>
                        {lawsuitData.movimentos.map((movimento: Movimento) => {
                            return (
                                <div
                                    key={movimento.date}
                                    className={styles.movimento}
                                >
                                    <p> {movimento.date}</p>
                                    <p> {movimento.detail}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.extra}>
                        <div>
                            <h3> Detalhes do Processo </h3>
                            <p>
                                Este processo tramita em {lawsuitData.tribunal}
                            </p>
                            <p> Isto aqui seria um detalhe do processo.</p>
                            <p> Isto aqui seria um detalhe do processo.</p>
                            <p> Isto aqui seria um detalhe do processo.</p>
                        </div>
                        <div className={styles.parties}>
                            <h3> Partes Envolvidas </h3>
                            <div className={styles.party}>
                                <h4> {lawsuitData.autor} </h4>
                                <p> Parte Envolvida - Autor </p>
                            </div>
                            <div className={styles.party}>
                                <h4> {lawsuitData.reu}</h4>
                                <p> Parte Envolvida - Ré </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
