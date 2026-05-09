// ==========================================
// COMPONENT - Contact.jsx
// Form kontak dengan EmailJS integration
// ==========================================
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import {
  FaGithub, FaLinkedinIn, FaInstagram, FaTiktok
} from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const socialLinks = [
  { icon: FaGithub, label: 'GitHub', href: personalInfo.social.github, color: '#333' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: personalInfo.social.linkedin, color: '#0077B5' },
  { icon: FaInstagram, label: 'Instagram', href: personalInfo.social.instagram, color: '#E4405F' },
  { icon: FaTiktok, label: 'TikTok', href: personalInfo.social.tiktok, color: '#000000' },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  // Validasi form
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nama wajib diisi';
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi';
    else if (formData.message.length < 10) newErrors.message = 'Pesan minimal 10 karakter';
    return newErrors;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Hapus error saat user mulai mengetik
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');

    try {
      // ============================================
      // EMAILJS INTEGRATION
      // Untuk mengaktifkan pengiriman email:
      // 1. Buat akun di emailjs.com
      // 2. Buat Email Service & Template
      // 3. Uncomment kode di bawah dan isi YOUR_*
      // ============================================
      
      // import emailjs from '@emailjs/browser';
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     message: formData.message,
      //     to_email: personalInfo.email,
      //   },
      //   'YOUR_PUBLIC_KEY'
      // );

      // Simulasi pengiriman (hapus ini setelah setup EmailJS)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status setelah 3 detik
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-silver-100/50 dark:bg-dark-200/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-silver-300/10 dark:bg-silver-300/3 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4">Get In Touch</p>
          <h2 className="section-title text-dark-200 dark:text-silver-100">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-4 text-dark-100/50 dark:text-silver-400 max-w-lg mx-auto">
            Punya project menarik? Mari kita diskusikan bersama!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-dark-200 dark:text-silver-100 mb-4">
              Let's work together
            </h3>
            <p className="text-dark-100/60 dark:text-silver-400 mb-8 leading-relaxed">
              Saya selalu terbuka untuk proyek baru, kolaborasi kreatif, dan peluang menarik lainnya.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-10">
              {[
                { label: 'Email', value: personalInfo.email },
                { label: 'Phone', value: personalInfo.phone },
                { label: 'Location', value: personalInfo.location },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="text-xs font-semibold uppercase tracking-widest text-silver-400 w-20 pt-0.5">
                    {label}
                  </div>
                  <div className="text-dark-100/70 dark:text-silver-300 text-sm">{value}</div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-silver-400 mb-4">
                Follow Me
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 glass rounded-xl flex items-center justify-center text-dark-100/60 dark:text-silver-400 border border-silver-300/10 hover:border-silver-300/40 transition-all group"
                    aria-label={label}
                    title={label}
                  >
                    <Icon size={16} className="group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 border border-silver-300/10">
              {/* Name */}
              <div className="mb-5">
                <label className="block text-xs font-semibold uppercase tracking-widest text-silver-400 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama kamu"
                  className={`input-field ${errors.name ? 'border-red-400/60' : ''}`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <FiAlertCircle size={11} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-xs font-semibold uppercase tracking-widest text-silver-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nama@email.com"
                  className={`input-field ${errors.email ? 'border-red-400/60' : ''}`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <FiAlertCircle size={11} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-xs font-semibold uppercase tracking-widest text-silver-400 mb-2">
                  Pesan
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ceritakan project atau idemu..."
                  rows={5}
                  className={`input-field resize-none ${errors.message ? 'border-red-400/60' : ''}`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <FiAlertCircle size={11} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : status === 'error'
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : 'btn-primary'
                }`}
              >
                {status === 'loading' && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                  />
                )}
                {status === 'success' && <FiCheck size={16} />}
                {status === 'idle' && <FiSend size={16} />}
                {status === 'loading' ? 'Mengirim...' : 
                 status === 'success' ? 'Pesan Terkirim!' :
                 status === 'error' ? 'Gagal Terkirim' : 'Kirim Pesan'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
