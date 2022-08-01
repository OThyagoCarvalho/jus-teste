import { NextApiResponse, NextApiRequest } from 'next';
import { processos } from '../../../data';
import { Processo } from '../../../interfaces';
import { fauna } from '../../../services/fauna';
import { query as q } from 'faunadb';

// let processo1 = processos[1];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let lawsuitData;
    const { query } = req;
    const { id } = query;


    console.log(query);

    await fauna
        .query(q.Get(q.Match(q.Index('lawsuits_by_id'), `${id}`)))
        .then(ret => (lawsuitData = ret))
        .then(err => console.log(err));

    return lawsuitData ? res.status(200).json(lawsuitData) : res.status(404).json({ error: 'Processo não encontrado'});
}
