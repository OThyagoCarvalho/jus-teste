export type Processo = {
    id: string;
    autor: string;
    reu: string;
    tribunal: string;
    autuacao: string;
    movimentos: Movimento[];
};

export type Movimento = {
    date: string;
    detail: string;
};
