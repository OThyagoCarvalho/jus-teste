import styles from './../styles/404.module.scss';

export default function fourOhFour() {
    return (
        <section className={styles.section}>
            Ops, parece que essa página não existe. Tente voltar para a Página
            Inicial e Digitar Um número de processo Válido.
        </section>
    );
}
