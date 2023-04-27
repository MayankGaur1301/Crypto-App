import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../index';
import { Container, HStack, Button, RadioGroup, Radio } from '@chakra-ui/react';
import Loader from './Loader';
import CoinCard from './CoinCard';
import Error from './Error';

const Coins = () => {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState('inr');


    const currencySymbol = currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';

    const changePage = (page) => {
        setPage(page);
        setLoading(true);
    }

    // pagination for creating 132 pages buttons.
    const btns = new Array(132).fill(1)


    useEffect(() => {
        const fetchCoins = async () => {
            try {

                const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
                setCoins(data);
                setLoading(false);

            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }

        fetchCoins();

    }, [currency, page]);

    if (error) return <Error message={"Error While Fetching Coins"} />

    return (
        <Container maxW={'container.xl'}>

            {loading ? <Loader /> : (

                <>

                <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
                    <HStack gap={'4'} fontWeight={'700'}>
                        <Radio value={'inr'} >INR (₹)</Radio>
                        <Radio value={'usd'} >USD ($)</Radio>
                        <Radio value={'eur'} >EURO (€)</Radio>
                    </HStack>
                </RadioGroup>

                    <HStack flexWrap={'wrap'} justifyContent={'space-evenly'}>

                        {
                            coins.map((i) => (
                                <CoinCard
                                    id={i.id}
                                    name={i.name}
                                    img={i.image}
                                    symbol={i.symbol}
                                    price={i.current_price}
                                    url={i.url}
                                    currencySymbol={currencySymbol}
                                />
                            ))
                        }

                    </HStack>


                    {/* for pagination */}

                    <HStack w={'full'} overflowX={'auto'} p={'8'}>

                        {/* <Button onClick={() => changePage(2)}  bgColor={'blackAlpha.900'} color={'white'}>2</Button> */}

                        {
                            btns.map((item, index) => (
                                <Button
                                    key={index}
                                    onClick={() => changePage(index + 1)}
                                    bgColor={'blackAlpha.900'}
                                    color={'white'}
                                > {index + 1} </Button>
                            ))
                        }
                    </HStack>

                </>

            )}

        </Container>

    );
};

export default Coins;