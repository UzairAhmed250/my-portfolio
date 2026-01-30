"use client";

import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const generateCaptcha = () => Math.floor(Math.random() * 10) + ' + ' + Math.floor(Math.random() * 10);

const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    captcha: ''
  });
  const [captchaValue, setCaptchaValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState('');

  // Set captcha only on client side to avoid hydration mismatch
  useEffect(() => {
    setCaptchaValue(generateCaptcha());
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const expectedAnswer = eval(captchaValue);
    const userAnswer = parseInt(formData.captcha);
    if (userAnswer !== expectedAnswer) {
      toast({
        title: "Captcha Failed",
        description: "Please solve the math problem correctly.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      setFormData({
        name: '',
        email: '',
        message: '',
        captcha: ''
      });
      setIsSubmitting(false);

      // Generate new captcha
      setCaptchaValue(generateCaptcha());
    }, 1500);
  };
  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => {
      setCopied('');
    }, 2000);
  };
  return <section id="contact" className="py-20 bg-[#09172a]">
      <div className="section-container">
        <h2 className="section-title pb-2">Contact Me</h2>
        <p className="mb-12 text-lg max-w-3xl">
          I'm always interested in new opportunities and collaborations. 
          Feel free to reach out if you'd like to work together.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-secondary/30 backdrop-blur-sm p-8 rounded-lg border border-electric-cyan/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-electric-cyan/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-electric-cyan">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate text-sm mb-1">Email</p>
                    <div className="flex items-center cursor-pointer group" onClick={() => handleCopy('uzair2500231@gmail.com', 'email')}>
                      <p className="text-white font-medium">uzair2500231@gmail.com</p>
                      <div className="ml-2 text-slate group-hover:text-electric-cyan transition-colors">
                        {copied === 'email' ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                          </svg>}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* GitHub */}
                <div className="flex items-start">
                  <div className="bg-electric-cyan/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-electric-cyan">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate text-sm mb-1">GitHub</p>
                    <a href="https://github.com/UzairAhmed250" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-electric-cyan transition-colors">github.com/UzairAhmed250</a>
                  </div>
                </div>
                
                {/* LinkedIn */}
                <div className="flex items-start">
                  <div className="bg-electric-cyan/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-electric-cyan">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate text-sm mb-1">LinkedIn</p>
                    <a href="https://linkedin.com/in/uzair-ahmed-547644244/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-electric-cyan transition-colors">
                      linkedin.com/in/uzair-ahmed-547644244/
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-slate/10">
                <h4 className="text-white font-medium mb-4">Digital Business Card</h4>
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-electric-cyan/20 to-blue-500/20 p-6 rounded-lg border border-electric-cyan/30 w-72">
                    <div className="text-center mb-4">
                      <div className="inline-flex items-center justify-center bg-electric-cyan/20 rounded-full w-20 h-20 mb-3">
                        <span className="text-3xl">👨‍💻</span>
                      </div>
                      <h5 className="text-white text-lg font-bold">Uzair Ahmed</h5>
                      <p className="text-electric-cyan text-sm">MERN Stack Developer</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-electric-cyan mr-2">
                          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <span className="text-slate">uzair2500231@gmail.com</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-electric-cyan mr-2">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span className="text-slate">linkedin.com/in/uzair-ahmed-547644244/</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-electric-cyan mr-2">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                        <span className="text-slate">github.com/uzairahmed250</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-secondary/30 backdrop-blur-sm p-8 rounded-lg border border-electric-cyan/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-slate mb-2">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-space-blue border border-slate/20 rounded-lg focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-slate mb-2">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-space-blue border border-slate/20 rounded-lg focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-slate mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-space-blue border border-slate/20 rounded-lg focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan" />
                </div>
                
                {/* Simple Captcha */}
                <div>
                  <label htmlFor="captcha" className="block text-slate mb-2">
                    Please solve: <span className="font-fira text-electric-cyan">{captchaValue} =</span>
                  </label>
                  <input type="text" id="captcha" name="captcha" value={formData.captcha} onChange={handleChange} required className="w-full px-4 py-3 bg-space-blue border border-slate/20 rounded-lg focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan" />
                </div>
                
                <button type="submit" disabled={isSubmitting} className="w-full button-glow flex items-center justify-center">
                  {isSubmitting ? <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-space-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </> : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;