import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import prev from '../../../../../assets/svg/prev.svg';
import next from '../../../../../assets/svg/next.svg';
import 'swiper/swiper.min.css';
import * as S from './Carousel.style';

SwiperCore.use(Navigation);

const Carousel = ({ feedList, carouselState, setNavigateState }) => {
	const handleNavigate = () => {
		setNavigateState('photo');
	};

	return (
		<>
			<S.CarouselWrapper>
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					initialSlide={carouselState}
					scrollbar={{ draggable: true }}
					navigation={{
						prevEl: '.swiper-button-prev',
						nextEl: '.swiper-button-next',
					}}
					pagination={{ clickable: true }}
				>
					{feedList?.map(({ src }, idx) => {
						return (
							<SwiperSlide key={idx}>
								<S.CarouselItem onClick={handleNavigate} src={src}></S.CarouselItem>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<S.NavigatePrev className="swiper-button-prev" src={prev} />
				<S.NavigateNext className="swiper-button-next" src={next} />
			</S.CarouselWrapper>
		</>
	);
};

export default Carousel;
