import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient'; // Импортируем клиент Supabase

function PetBlock({ petId }) {
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPet = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from('products')
                .select('*')
                .eq('id', petId) // Получаем запись по ID
                .single(); // .single() возвращает единственную запись

            if (error) {
                setError(error);
                console.error("Ошибка при загрузке данных:", error);
            } else {
                setPet(data); // Устанавливаем полученные данные в состояние    
            }
            setLoading(false); // Завершаем загрузку
        };

        fetchPet(); // Вызываем функцию загрузки данных
    }, [petId]); // Зависимость: если petId изменится, загрузим данные заново

    if (loading) return <p>Загрузка данных...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;
    if (!pet) return <p>Питомец не найден</p>; // Если питомец не найден

    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={pet.imageUrl} alt={pet.title} />
            <h4 className="pizza-block__title">{pet.title}</h4>
            <div className="pizza-block__selector">
                {pet.description}
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{pet.price}₽</div>
                <div className="button button--outline button--add">
                    <span>Добавить</span>
                </div>
            </div>
        </div>
    );
}

export default PetBlock;
