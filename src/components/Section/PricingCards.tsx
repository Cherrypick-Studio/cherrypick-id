import { useState } from 'react';

interface PricingPlan {
	title: string;
	monthlyPrice: number;
	yearlyPrice: number;
	waktuPengerjaan: string;
	features: string[];
	isPopular?: boolean;
	isDiscount?: boolean
}

const plans: PricingPlan[] = [
	{
		title: 'Landing Page Basic',
		monthlyPrice: 1500000,
		yearlyPrice: 14400000,
		waktuPengerjaan: '7-14 Hari',
		features: [
			'Landing Page 1 Halaman',
			'Desain Responsif',
			'Form Kontak',
			'Integrasi WhatsApp',
			'Hosting 1 Tahun',
		],
		isDiscount: true
	},
	{
		title: 'Website Professional',
		monthlyPrice: 3500000,
		yearlyPrice: 33600000,
		waktuPengerjaan: '14-21 Hari',
		features: [
			'Website hingga 5 Halaman',
			'Desain Custom Premium',
			'CMS Admin Panel',
			'SEO Optimization',
			'Integrasi Social Media',
			'Hosting 1 Tahun',
			'Support 3 Bulan',
		],
		isPopular: true,
		isDiscount: true
	},
	{
		title: 'E-commerce / Custom Website',
		monthlyPrice: 7500000,
		yearlyPrice: 72000000,
		waktuPengerjaan: '21-30 Hari',
		features: [
			'Website Unlimited Halaman',
			'Desain Custom Eksklusif',
			'Full CMS & Dashboard',
			'E-Commerce Ready',
			'Advanced SEO',
			'Integrasi API Custom',
			'Hosting 1 Tahun',
			'Support 6 Bulan',
		],
	},
];

const formatPrice = (price: number) => {
	return new Intl.NumberFormat('id-ID').format(price);
};

const whatsappNumber = '6281234567890';

export default function PricingCards() {
	const [isYearly, setIsYearly] = useState(false);

	return (
		<div className="flex flex-col gap-12 items-center w-full">
			{/* Tabs */}
			<div className="flex items-center gap-2 border border-[#DDDDDD] dark:border-[#666666] bg-[#FEFEFE] dark:bg-transparent p-1.5 rounded-[8px]">
				<button
					onClick={() => setIsYearly(false)}
					className={`px-6 py-3 rounded-[8px] text-sm font-medium transition-all duration-300 ${!isYearly
						? 'bg-[#FFF5F6] dark:bg-[#0A0A0A] text-[#C42026] dark:text-[#FEFEFE]'
						: 'text-[#666666] dark:text-[#BBBBBB]'
						}`}
				>
					Per Bulan
				</button>
				<button
					onClick={() => setIsYearly(true)}
					className={`px-6 py-3 rounded-[8px] text-sm font-medium transition-all duration-300 relative ${isYearly
						? 'bg-[#FFF5F6] dark:bg-[#0A0A0A] text-[#C42026] dark:text-[#FEFEFE]'
						: 'text-[#666666] dark:text-[#BBBBBB]'
						}`}
				>
					Per Tahun
					<span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
						-20%
					</span>
				</button>
			</div>

			{/* Pricing Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
				{plans.map((plan) => (
					<div
						key={plan.title}
						className={`pricing-card relative flex flex-col p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 ${plan.isPopular
							? 'bg-[#1A1A1A] dark:bg-[#FEFEFE] border-[#1A1A1A] dark:border-[#FEFEFE] lg:scale-105 lg:-my-4 shadow-2xl'
							: 'bg-white dark:bg-[#2A2A2A] border-[#E5E5E5] dark:border-[#404040] hover:border-[#1A1A1A] dark:hover:border-[#FEFEFE]'
							}`}
					>
						{plan.isDiscount && (
							<div className="absolute -top-4 right-0 -translate-x-1/2">
								<span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-[8px]">
									Diskon 20%
								</span>
							</div>
						)}

						{/* Title */}
						<h3
							className={`text-xl md:text-2xl font-bold mb-4 ${plan.isPopular
								? 'text-white dark:text-[#1A1A1A]'
								: 'text-[#1A1A1A] dark:text-[#FEFEFE]'
								}`}
						>
							{plan.title}
						</h3>

						{/* Price */}
						<div className="mb-6">
							{isYearly ? (
								<div>
									<div className="flex items-baseline gap-2 flex-wrap">
										<span
											className={`text-3xl md:text-4xl font-bold ${plan.isPopular
												? 'text-white dark:text-[#1A1A1A]'
												: 'text-[#1A1A1A] dark:text-[#FEFEFE]'
												}`}
										>
											Rp {formatPrice(plan.yearlyPrice)}
										</span>
										<span
											className={`text-sm ${plan.isPopular
												? 'text-gray-300 dark:text-gray-600'
												: 'text-[#666666] dark:text-[#BBBBBB]'
												}`}
										>
											/tahun
										</span>
									</div>
									<div
										className={`text-sm line-through mt-1 ${plan.isPopular
											? 'text-gray-400 dark:text-gray-500'
											: 'text-[#999999] dark:text-[#888888]'
											}`}
									>
										Rp {formatPrice(plan.monthlyPrice * 12)}
									</div>
								</div>
							) : (
								<div className="flex items-baseline gap-2 flex-wrap">
									<span
										className={`text-3xl md:text-4xl font-bold ${plan.isPopular
											? 'text-white dark:text-[#1A1A1A]'
											: 'text-[#1A1A1A] dark:text-[#FEFEFE]'
											}`}
									>
										Rp {formatPrice(plan.monthlyPrice)}
									</span>
									<span
										className={`text-sm ${plan.isPopular
											? 'text-gray-300 dark:text-gray-600'
											: 'text-[#666666] dark:text-[#BBBBBB]'
											}`}
									>
										/bulan
									</span>
								</div>
							)}
						</div>

						{/* Waktu Pengerjaan */}
						<div
							className={`flex items-center gap-2 mb-6 pb-6 border-b ${plan.isPopular
								? 'border-gray-600 dark:border-gray-300'
								: 'border-[#E5E5E5] dark:border-[#404040]'
								}`}
						>
							<svg
								className={`w-5 h-5 ${plan.isPopular
									? 'text-gray-300 dark:text-gray-600'
									: 'text-[#666666] dark:text-[#BBBBBB]'
									}`}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<span
								className={`text-sm font-medium ${plan.isPopular
									? 'text-gray-300 dark:text-gray-600'
									: 'text-[#666666] dark:text-[#BBBBBB]'
									}`}
							>
								Waktu Pengerjaan: {plan.waktuPengerjaan}
							</span>
						</div>

						{/* Features */}
						<ul className="flex-1 space-y-3 mb-8">
							{plan.features.map((feature, index) => (
								<li key={index} className="flex items-start gap-3">
									<svg
										className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.isPopular
											? 'text-green-400 dark:text-green-600'
											: 'text-green-500 dark:text-green-400'
											}`}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span
										className={`text-sm ${plan.isPopular
											? 'text-gray-200 dark:text-gray-700'
											: 'text-[#666666] dark:text-[#BBBBBB]'
											}`}
									>
										{feature}
									</span>
								</li>
							))}
						</ul>

						{/* WhatsApp Button */}
						<a
							href={`https://wa.me/${whatsappNumber}?text=Halo, saya tertarik dengan paket ${plan.title}`}
							target="_blank"
							rel="noopener noreferrer"
							className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-medium transition-all duration-300 ${plan.isPopular
								? 'bg-white dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-white hover:bg-gray-100 dark:hover:bg-[#333333]'
								: 'bg-[#1A1A1A] dark:bg-[#FEFEFE] text-white dark:text-[#1A1A1A] hover:bg-[#333333] dark:hover:bg-gray-200'
								}`}
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
							</svg>
							Hubungi via WhatsApp
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
