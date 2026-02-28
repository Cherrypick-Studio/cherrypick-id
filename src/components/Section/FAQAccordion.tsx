import { useState } from 'react';

const faqs = [
	{
		question: 'Berapa lama waktu pengerjaan website?',
		answer: 'Waktu pengerjaan website bervariasi tergantung kompleksitas proyek. Untuk website landing page sederhana membutuhkan 3-5 hari kerja, website company profile 1-2 minggu, dan untuk website e-commerce atau custom 2-4 minggu.',
	},
	{
		question: 'Apakah bisa request revisi setelah website jadi?',
		answer: 'Tentu bisa! Kami menyediakan 3x revisi gratis setelah website selesai. Untuk revisi tambahan atau perubahan besar, akan dikenakan biaya tambahan sesuai dengan scope pekerjaan.',
	},
	{
		question: 'Apakah termasuk domain dan hosting?',
		answer: 'Untuk paket tahunan, domain .com dan hosting sudah termasuk dalam harga. Untuk paket bulanan, Anda perlu menyediakan hosting sendiri atau bisa menggunakan layanan hosting kami dengan biaya terpisah.',
	},
	{
		question: 'Bagaimana sistem pembayarannya?',
		answer: 'Pembayaran dilakukan dengan sistem DP 50% di awal dan pelunasan 50% setelah website selesai. Kami menerima transfer bank, e-wallet, dan kartu kredit.',
	},
	{
		question: 'Apakah website-nya responsive untuk mobile?',
		answer: 'Ya, semua website yang kami buat sudah responsive dan mobile-friendly. Website akan tampil optimal di semua perangkat termasuk smartphone, tablet, dan desktop.',
	},
	{
		question: 'Apakah ada layanan maintenance setelah website jadi?',
		answer: 'Kami menyediakan layanan maintenance bulanan yang mencakup update keamanan, backup rutin, monitoring uptime, dan support teknis. Harga maintenance mulai dari Rp 100.000/bulan.',
	},
];

export default function FAQAccordion() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="w-full max-w-[800px] flex flex-col gap-4">
			{faqs.map((faq, index) => (
				<div
					key={index}
					className="w-full border border-[#E5E5E5] dark:border-[#404040] rounded-xl overflow-hidden"
				>
					<button
						onClick={() => toggleFAQ(index)}
						className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-[#1A1A1A] hover:bg-gray-50 dark:hover:bg-[#222222] transition-colors"
					>
						<span className="font-medium text-[#1A1A1A] dark:text-[#FEFEFE] pr-4">
							{faq.question}
						</span>
						<svg
							className={`w-5 h-5 text-[#666666] dark:text-[#BBBBBB] flex-shrink-0 transition-transform duration-300 ${
								openIndex === index ? 'rotate-180' : ''
							}`}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>
					<div
						className={`grid transition-all duration-300 ease-in-out ${
							openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
						}`}
					>
						<div className="overflow-hidden">
							<div className="p-5 pt-0 bg-white dark:bg-[#1A1A1A]">
								<p className="text-[#666666] dark:text-[#BBBBBB] leading-relaxed">
									{faq.answer}
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
