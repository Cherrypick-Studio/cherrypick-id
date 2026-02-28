import { useState } from 'react';
import { whatsappUrlWithText } from '../../config';

interface PricingPlan {
	title: string;
	monthlyPrice: number;
	yearlyPrice: number;
	startForm?: number;
	waktuPengerjaan: string;
	features: string[];
	addOns?: string[];
	isPopular?: boolean;
	isDiscount?: boolean
}

const plans: PricingPlan[] = [
	{
		title: 'Landing Page Basic',
		monthlyPrice: 150000,
		yearlyPrice: 1800000,
		startForm: 0,
		waktuPengerjaan: '3-7 Hari',
		features: [
			'1 halaman landing page responsif',
			'Desain menggunakan template premium (custom warna & logo)',
			'4-6 section standar (Hero, Benefit, Testimoni, CTA, Footer)',
			'WhatsApp integration',
			'Domain .com atau .id',
			'SSL certificate',
			'SEO basic (meta tags, keywords)',
			'2x revisi minor',
			'Waktu pengerjaan: 3-7 hari'
		],
		addOns: [
			'Tambahan section (+Rp 50.000/section)',
			'Copywriting profesional (+Rp 100.000)',
		],
		isDiscount: true
	},
	{
		title: 'Website Professional',
		monthlyPrice: 300000,
		yearlyPrice: 3600000,
		startForm: 0,
		waktuPengerjaan: '2-3 Minggu',
		features: [
			'Multi-page website (5-8 halaman)',
			'Semi-custom design (modifikasi template sesuai brand)',
			'Halaman lengkap: Home, About, Services, Portfolio/Products, Blog (5 post), Contact',
			'CMS WordPress dengan dashboard mudah',
			'Integrasi Google Analytics & Facebook Pixel',
			'SEO on-page optimization',
			'Integrasi social media & WhatsApp Business',
			'Form dinamis dengan notifikasi email',
			'Gallery/portfolio showcase responsif',
			'Speed optimization basic',
			'Domain, hosting, SSL 1 tahun',
			'3x revisi',
			'1 bulan support teknis',
			'Training lengkap + dokumentasi',
			'Waktu pengerjaan: 2-3 minggu'
		],
		addOns: [
			'Tambahan halaman (+Rp 75.000/halaman)',
			'Blog post tambahan (+Rp 50.000/post)',
			'Email hosting setup (+Rp 150.000)',
			'Maintenance bulanan (+Rp 100.000/bulan)',
		],
		isPopular: true,
		isDiscount: true
	},
	{
		title: 'E-commerce / Custom Website',
		monthlyPrice: 0,
		yearlyPrice: 0,
		startForm: 4500000,
		waktuPengerjaan: '1-3 bulan',
		features: [
			'Katalog produk unlimited',
			'Shopping cart & checkout',
			'Payment gateway (Midtrans/Xendit/DOKU)',
			'Ongkir otomatis (JNE, SiCepat, dll)',
			'Invoice & order management',
			'Member area login',
			'Admin dashboard',
			'Support 6 Bulan',
		],
		addOns: [
			'Custom fitur tambahan (harga menyesuaikan)',
			'Integrasi API pihak ketiga (+Rp 500.000)',
			'Mobile app companion (+Rp 2.000.000)',
		],
	},
];

const formatPrice = (price: number) => {
	return new Intl.NumberFormat('id-ID').format(price);
};

const MIN_VISIBLE_FEATURES = 8;

function PricingCard({ plan, isYearly }: { plan: PricingPlan; isYearly: boolean }) {
	const [showAll, setShowAll] = useState(false);
	const totalItems = plan.features.length + (plan.addOns?.length || 0);
	const hasMore = totalItems > MIN_VISIBLE_FEATURES;

	const visibleFeatures = showAll ? plan.features : plan.features.slice(0, MIN_VISIBLE_FEATURES);
	const remainingSlots = MIN_VISIBLE_FEATURES - visibleFeatures.length;
	const visibleAddOns = showAll
		? plan.addOns || []
		: (plan.addOns || []).slice(0, Math.max(0, remainingSlots));

	return (
		<div
			className={`pricing-card relative flex flex-col p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 
				${plan.isPopular
					? 'bg-[#FFFBED] dark:bg-[#333333] border-[#FFCA00] dark:border-[#FFCA00] lg:scale-105 lg:-my-4 shadow-2xl'
					: 'bg-[#FEFEFE] dark:bg-[#1A1A1A] border-[#DDDDDD] dark:border-[#404040] hover:border-[#444444] dark:hover:border-[#FEFEFE]'
				}`}
		>
			{plan.isDiscount && isYearly && (
				<div className="absolute -top-4 right-0">
					<span className="bg-[#FF7F00] text-white text-xs font-bold px-4 py-1.5 rounded-[8px]">
						Diskon 20%
					</span>
				</div>
			)}

			{/* Title */}
			<h3 className="text-xl font-semibold mb-3 text-center">
				{plan.title}
			</h3>

			{/* Price */}
			{plan.startForm !== 0 && <span className='text-center text-base text-[#666666] dark:text-[#BBBBBB]'>Start Form</span>}

			<div className="mb-3 mx-auto">
				{plan.startForm === 0 ? isYearly ? (
					<div>
						<div
							className={`text-sm line-through text-center mx-auto mt-1 ${plan.isPopular
								? 'text-gray-400 dark:text-gray-500'
								: 'text-[#999999] dark:text-[#888888]'
								}`}
						>
							Rp {formatPrice(plan.monthlyPrice * 12)}
						</div>
						<div className="flex items-baseline gap-2 flex-wrap">
							<span className="text-[28px] text-[#1A1A1A] dark:text-[#FEFEFE] font-bold">
								Rp {formatPrice(plan.yearlyPrice - (plan.yearlyPrice * 0.2))}
							</span>{" "}
							<span className="text-xl text-[#666666] dark:text-[#BBBBBB]">
								/ tahun
							</span>
						</div>
					</div>
				) : (
					<div className="flex items-baseline gap-2 flex-wrap">
							<span className="text-[28px] text-[#1A1A1A] dark:text-[#FEFEFE] font-bold">
								Rp {formatPrice(plan.monthlyPrice)}
							</span>{" "}
							<span className="text-xl text-[#666666] dark:text-[#BBBBBB]">
								/ bulan
							</span>
						</div>
				) : <span className="text-[28px] text-[#1A1A1A] dark:text-[#FEFEFE] font-bold">
					Rp {formatPrice(plan.startForm || 0)}
				</span>}
			</div>

			{/* Waktu Pengerjaan */}
			<div className="flex items-center gap-2 mb-6 pb-6 border-b border-[#D9D9D9] w-full justify-center">
				<span className="text-base text-[#666666] dark:text-[#BBBBBB] text-center">
					Waktu Pengerjaan: <span className='font-bold'>{plan.waktuPengerjaan}</span>
				</span>
			</div>

			{/* Features */}
			<ul className="flex-1 space-y-3 mb-4">
				{visibleFeatures.map((feature, index) => (
					<li key={index} className="flex items-start gap-3">
						<svg
							className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#1A1A1A] dark:text-[#BBBBBB]"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<span className="text-sm text-[#666666] dark:text-[#BBBBBB]">
							{feature}
						</span>
					</li>
				))}
			</ul>

			{/* Add-ons Section */}
			{visibleAddOns.length > 0 && (
				<div className="mb-4">
					<div className="flex items-center gap-2 mb-3">
						<div className="flex-1 h-px bg-[#D9D9D9]"></div>
						<span className="text-xs font-semibold text-[#FF7F00] uppercase tracking-wide">Add-ons</span>
						<div className="flex-1 h-px bg-[#D9D9D9]"></div>
					</div>
					<ul className="space-y-3">
						{visibleAddOns.map((addOn, index) => (
							<li key={index} className="flex items-start gap-3">
								<svg
									className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#FF7F00]"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 4v16m8-8H4"
									/>
								</svg>
								<span className="text-sm text-[#666666] dark:text-[#BBBBBB]">
									{addOn}
								</span>
							</li>
						))}
					</ul>
				</div>
			)}

			{/* See More / See Less Button */}
			{hasMore && (
				<button
					onClick={() => setShowAll(!showAll)}
					className="flex items-center justify-center gap-1 text-sm font-medium text-[#C42026] hover:text-[#A01B20] dark:text-[#FF6B6B] dark:hover:text-[#FF8A8A] transition-colors mb-4 cursor-pointer"
					aria-expanded={showAll}
				>
					{showAll ? (
						<>
							Lihat Lebih Sedikit
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
							</svg>
						</>
					) : (
						<>
							Lihat Selengkapnya ({totalItems - MIN_VISIBLE_FEATURES} lainnya)
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
							</svg>
						</>
					)}
				</button>
			)}

			<div className="pb-6 border-b border-[#D9D9D9]"></div>

			<span className='text-center my-8 text-[#666666] dark:text-[#BBBBBB] text-base'>Tertarik dengan Paket Website ini ?</span>

			{/* WhatsApp Button */}
			<a
				href={whatsappUrlWithText(`Halo, saya tertarik dengan paket ${plan.title}`)}
				target="_blank"
				rel="noopener noreferrer"
				className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-medium transition-all duration-300 ${plan.isPopular
					? 'bg-[#1A1A1A] dark:bg-[#FFCA00] text-white dark:text-[#1A1A1A] hover:opacity-80 '
					: 'bg-[#C42026] text-white  hover:opacity-80'
					}`}
			>
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
				</svg>
				Hubungi via WhatsApp
			</a>
		</div>
	);
}

export default function PricingCards() {
	const [isYearly, setIsYearly] = useState(false);

	return (
		<div className="flex flex-col gap-12 items-center w-full">
			{/* Tabs */}
			<div className="flex items-center gap-2 border border-[#DDDDDD] dark:border-[#666666] bg-[#FEFEFE] dark:bg-transparent p-1.5 rounded-[8px]" role="tablist" aria-label="Pricing periods">
				<button
					onClick={() => setIsYearly(false)}
					className={`px-6 py-3 rounded-[8px] text-sm font-medium cursor-pointer transition-all duration-300 ${!isYearly
						? 'bg-[#FFF5F6] dark:bg-[#0A0A0A] text-[#C42026] dark:text-[#FEFEFE]'
						: 'text-[#666666] dark:text-[#BBBBBB]'
						}`}
					role="tab"
					aria-selected={!isYearly}
					aria-controls="pricing-content"
					id="tab-monthly"
				>
					Per Bulan
				</button>
				<button
					onClick={() => setIsYearly(true)}
					className={`px-6 py-3 rounded-[8px] text-sm font-medium transition-all duration-300 cursor-pointer relative ${isYearly
						? 'bg-[#FFF5F6] dark:bg-[#0A0A0A] text-[#C42026] dark:text-[#FEFEFE]'
						: 'text-[#666666] dark:text-[#BBBBBB]'
						}`}
					role="tab"
					aria-selected={isYearly}
					aria-controls="pricing-content"
					id="tab-yearly"
				>
					Per Tahun
					<span className="bg-[#FF7F00] text-white text-[10px] font-bold p-2 rounded-[8px] ml-2" aria-label="Diskon 20 persen">
						-20%
					</span>
				</button>
			</div>

			{/* Pricing Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16" id="pricing-content" role="tabpanel" aria-labelledby={isYearly ? "tab-yearly" : "tab-monthly"}>
				{plans.map((plan) => (
					<PricingCard key={plan.title} plan={plan} isYearly={isYearly} />
				))}
			</div>
		</div>
	);
}
