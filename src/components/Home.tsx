import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../store';
import '../css/home.css'
import { getData } from '../actions/paulactions/paulactions';
import { TPaulImage } from '../actions/paulactions/types';
import { useOnClickOutside } from './HandleOnClickOutside';
import Loading from './Loading';
import Popup from './Popup';

interface IHomeProps {


}

const Home: React.FunctionComponent<IHomeProps> = (props) => {

    // хук react для вызова функций из папки actions
    const dispatch = useDispatch()

    // ссылка на кеш хранилище, куда будут сохранены данные
    const imagesState = useSelector((state: RootStore) => state.paul.data)
    const loadingState = useSelector((state: RootStore) => state.paul.is_loading)

    // Первичная загрузка данных
    React.useEffect(() => {
        dispatch(getData())
    }, [])

    // ???
    function testFn(e) {
        //e.preventDefault();
        alert('hehe')
    }

    // массив с выбранными элементами
    const [selectedImages, setSelectedImages] = React.useState<TPaulImage[]>([])

    // однуление массива, где хранятся выбранные элементы
    function testFn4(e) {
        setSelectedImages([])
    }
    const selectAll2 = () => {
        setSelectedImages(imagesState)
    }
    // {id: 2, name: '123123123}
    // гайд скринил
    const toggleImage = (image: TPaulImage) => {
        // [{id: 1, name: 'ss'}] -> [1] -> if 2 in [1]
        selectedImages.map(i => i.id).includes(image.id) ?

            // [{id: 1, name: 'ss'}] => [{id: 1, name: 'ss'}] -> []
            setSelectedImages(selectedImages.filter(i => i.id != image.id)) :


            setSelectedImages([...selectedImages, image])

    }



    // тест поля input
    const [username, setUsername] = useState('')




    // состояние для того, чтобы понимать отображается окно или нет
    const [showPopup, setShopPopup] = useState(false)



    return <>

        {showPopup && <>
            <Popup val={'12345'} onClose={() => setShopPopup(false)} />
        </>}

        <div>
            <div className='header'>
                <div className='return' onClick={testFn}>
                    <div className='arrow'>
                        &#10132;
                    </div>
                </div>
                <div className='user-info'>
                    <div className='user'>
                        <div className='user-name-title'>
                            <div className='user-name'>
                                {imagesState[0]?.account.name}
                            </div>
                            <div className='user-title'>
                                Администратор
                            </div>
                        </div>
                    </div>
                    <div className='user'>
                        <img className='user-photo' src={imagesState[0]?.account.photo} />
                    </div>
                </div>
            </div>
            <div className='main'>
                <div className='block upload'>
                    <div className='upload-file'>
                        <input type='file' />
                    </div>
                    <div>
                        <button onClick={_ => setShopPopup(true)} className='upload-button'>

                            <p>Загрузить</p>
                            <i className='fas fa-download'></i>

                        </button>
                    </div>
                </div>
                <div className='block'>
                    <button onClick={selectAll2}>Выбрать все</button>
                    <button onClick={testFn4}>Сбросить выделение</button>
                </div>
                <div className='block images'>
                    {loadingState && <>

                        <Loading height={400} />
                    </>}

                    {!loadingState && imagesState.map(el => {

                        const className = selectedImages.map(i => i.id).includes(el.id) ? 'image selected' : 'image'

                        return <>
                            <div
                                style={{ backgroundImage: `url(${el.url})` }}
                                className={className}
                                onClick={() => toggleImage(el)}
                            // className={isSelected ? 'image selected' : 'image'}
                            // onClick={testFn2}
                            >
                                {/* <img src={el.url} /> */}
                            </div>
                        </>
                    })}
                </div>
            </div>
        </div>
    </>
};

export default Home;