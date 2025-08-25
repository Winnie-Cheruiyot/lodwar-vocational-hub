import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Calendar, Clock } from 'lucide-react';

const Tenders = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Tender Notices & Public Announcements
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Current tender opportunities and public notices from Lodwar Vocational Training Centre
          </p>
        </div>

        {/* Current Tender Notice */}
        <div className="mb-8">
          <Card className="border-primary/20 shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center gap-2 text-primary">
                <Calendar className="w-5 h-5" />
                Current Tender Notice - August 2025
              </CardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Deadline: 4th September 2025
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Pre-qualification for Supply and Delivery of Goods, Tools, and Services
                </h3>
                <p className="text-muted-foreground mb-4">
                  Lodwar Vocational Training Centre invites applications from interested, competent, and 
                  eligible firms for pre-qualification for the under-listed categories of goods, services, 
                  and works for the period 2025/2026.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Supply and Delivery of Goods and Tools:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Hardware Materials for Plumbing, Electrical, Masonry, Carpentry and Welding</li>
                    <li>• Tools for Plumbing, Electrical, Masonry, Carpentry, and Welding</li>
                    <li>• Garment Making and Fashion Design Materials and Tools</li>
                    <li>• Cosmetic Materials and Tools</li>
                    <li>• Motor Vehicle and Cycle Spare Parts and Tool-kits</li>
                    <li>• Fuel (Petrol and Diesel) and Other Lubricants</li>
                    <li>• Cleaning Detergents, Equipment and Toiletries</li>
                    <li>• General Office Stationery</li>
                    <li>• HP Toners and Cartridges</li>
                    <li>• Food Products (Meat, Dry Food, Fresh Fruits and Vegetables, Cereal Food, Soft Drinks)</li>
                    <li>• PPEs - Gloves, Masks, Goggles, Face Shields, Coveralls</li>
                    <li>• Office and Lecture Room Furniture</li>
                    <li>• Textbooks, Reference Books, Exercise Books, Diaries and ID Cards</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Provision of Services and Work:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Servicing of Printers and Photocopy Machines</li>
                    <li>• Repairs and Maintenance of Kitchen Equipment and Appliances</li>
                    <li>• Printing Services for Office Stationery and Catalogues</li>
                    <li>• Generator Services and Maintenance</li>
                    <li>• Mechanical Pump Services</li>
                    <li>• Cold Room, Air Conditioning and Refrigeration Services</li>
                    <li>• Fire Protection and Firefighting Equipment</li>
                    <li>• General Contractors for Minor Building Works</li>
                    <li>• Car/Bus Hire Services</li>
                    <li>• Sanitary Bin Services</li>
                    <li>• Asset Valuation Services</li>
                    <li>• Insurance Services - For Trainees' Attachment</li>
                  </ul>
                </div>
              </div>

              <div className="bg-secondary/20 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2 text-foreground">Submission Details:</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p><strong>Address:</strong> The Manager, Lodwar Vocational Training Centre</p>
                  <p><strong>P.O. BOX:</strong> 145-30500, LODWAR</p>
                  <p><strong>Location:</strong> Along Hospital-Napetet Road, Opposite Former Suam Hardware</p>
                  <p><strong>Deadline:</strong> 4th September 2025</p>
                  <p><strong>Note:</strong> Late submissions will not be accepted.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Tender Document (Page 1)
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Tender Document (Page 2)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tender Documents Display */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Tender Notice - Page 1</CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src="/lovable-uploads/e77eaca3-e689-46df-8875-49cf1600c427.png" 
                alt="Tender Notice Page 1" 
                className="w-full h-auto rounded-lg border"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tender Notice - Page 2</CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src="/lovable-uploads/f6d10bce-c741-4a6a-bcb5-dbaf67cd497a.png" 
                alt="Tender Notice Page 2" 
                className="w-full h-auto rounded-lg border"
              />
            </CardContent>
          </Card>
        </div>

        {/* Important Notice */}
        <Card className="border-destructive/20 bg-destructive/5">
          <CardContent className="p-6">
            <h3 className="font-semibold text-destructive mb-3">Important Information</h3>
            <div className="text-sm space-y-2">
              <p>• Women, Youths, and Persons living with Disabilities are encouraged to apply.</p>
              <p>• Interested firms are required to submit pre-qualification documents based on their area of specialization.</p>
              <p>• Documents should be enclosed in a sealed envelope clearly labeled with the tender number and description.</p>
              <p>• Prequalification is not a guarantee of business opportunity. Bidders will be invited to submit quotations on a need basis depending on available opportunities.</p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Tenders;