import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive updates about our courses and programs.",
      });
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="flex items-center justify-center p-6 bg-primary/10 rounded-lg border border-primary/20">
        <CheckCircle className="h-5 w-5 text-primary mr-2" />
        <span className="text-primary font-medium">Thank you for subscribing!</span>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 border shadow-sm">
      <div className="flex items-center mb-4">
        <Mail className="h-5 w-5 text-primary mr-2" />
        <h3 className="text-lg font-semibold">Stay Updated</h3>
      </div>
      <p className="text-muted-foreground mb-4">
        Get the latest news about our courses, events, and success stories.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button type="submit" disabled={isLoading} className="shrink-0">
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;