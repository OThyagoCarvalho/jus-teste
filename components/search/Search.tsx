import Link from 'next/link';
import { Popover, Button, Text } from '@nextui-org/react';
import { useState } from 'react';
import styles from './Search.module.scss';

export default function Search() {
    const [lawsuitNum, setLawsuitNum] = useState('');
    const handleEventChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setLawsuitNum(inputValue);
    };    

    return (
        <section className={styles.section}>
            <div>
                <h1>Busca Processual </h1>
                <label htmlFor="tribunais">
                    Selecione um tribunal para listar os processos ou busque
                    pelo número unificado
                </label>
                <div className={styles.inputs}>
                    <select name="tribunais" id="tribunais">
                        <option value="Tribunal">Tribunal</option>
                        <option value="TJSP">TJSP</option>
                        <option value="TRT1">TRT1</option>
                        <option value="TRT4">TRT4</option>
                        <option value="TRT18">TRT18</option>
                        <option value="TRF4">TRF4</option>
                        <option value="TRF1">TRF1</option>
                        <option value="TJMG">TJMG</option>
                        <option value="TJSC">TJSC</option>
                        <option value="TRT15">TRT15</option>
                        <option value="STJ">STJ</option>
                        <option value="TST">TST</option>
                        <option value="STF">STF</option>
                    </select>
                    <input
                        // onClick={handleClick}
                        type="text"
                        placeholder="0000000-00.0000.0.00.0000"
                        value={lawsuitNum}
                        onChange={handleEventChange}
                    ></input>

                    {lawsuitNum.length < 25 ? (
                        <Popover>
                            <Popover.Trigger>
                                <Button auto flat>
                                    Buscar
                                </Button>
                            </Popover.Trigger>
                            <Popover.Content>
                                <Text css={{ p: '$10' }}>
                                    Ops: Você precisa digitar um número CNJ Válido.
                                </Text>
                            </Popover.Content>
                        </Popover>
                    ) : (
                        <Link href={`/processo/${lawsuitNum}`}>
                            <button type="button">Buscar</button>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
