import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Facebook, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,     // Service ID từ env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,    // Template ID từ env
        {
          ...formData,
          to_email: '',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // Public key từ env
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "daclb.isresearch@gmail.com",
    href: "mailto:daclb.isresearch@gmail.com"
  }, {
    icon: Phone,
    label: "Phone",
    value: "(+84) 379211912",
    href: "tel:+84379211912"
  }, {
    icon: Github,
    label: "GitHub",
    value: "lebadac",
    href: "https://github.com/lebadac"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "lebadac-uitk16",
    href: "https://linkedin.com/in/lebadac-uitk16"
  }, {
    icon: Facebook,
    label: "Facebook",
    value: "lebadac.fb",
    href: "https://www.facebook.com/ba.ac.279745/?locale=vi_VN"
  }];
  return <section id="contact" className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">Contact</h2>
          <p className="text-gray-600">Let's connect and discuss opportunities</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return <a key={index} href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <div className="p-3 bg-rainbow-gradient rounded-lg group-hover:animate-pulse-glow">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{contact.label}</p>
                        <p className="text-sm text-gray-600">{contact.value}</p>
                      </div>
                    </a>;
              })}
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Let's Work Together</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology. Feel free to reach out!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bosch-green focus:border-transparent transition-colors" placeholder="Your name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bosch-green focus:border-transparent transition-colors" placeholder="your.email@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows={10} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bosch-green focus:border-transparent transition-colors resize-none" 
                  placeholder="Your message..." 
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-rainbow-gradient text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;