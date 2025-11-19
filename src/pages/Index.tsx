import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    name: "",
    station: "",
    contact: "",
    specialty: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx4H5uv6dViaK2-42L-4SBLvXyZJoebF9ozwwtfty8ioPZgxj3LLz5eONCwjoDa52bY/exec",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        toast.success("✔ Submitted Successfully!", {
          description: "Your form has been submitted.",
          duration: 4000,
        });
        
        // Reset form
        setFormData({
          q1: "",
          q2: "",
          q3: "",
          q4: "",
          q5: "",
          q6: "",
          q7: "",
          q8: "",
          q9: "",
          name: "",
          station: "",
          contact: "",
          specialty: "",
        });
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-2xl shadow-[var(--form-shadow)] border-0">
        <CardHeader className="text-center space-y-2 pb-6">
          <CardTitle className="text-3xl font-bold text-foreground">Medical Survey Form</CardTitle>
          <CardDescription className="text-muted-foreground">
            Please fill out all fields below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Question 1 */}
            <div className="space-y-2">
              <Label htmlFor="q1" className="text-sm font-medium text-foreground">
                1. Which calcium channel reduces blood pressure by dilating arteries...?
              </Label>
              <Input
                id="q1"
                name="q1"
                value={formData.q1}
                onChange={handleInputChange}
                placeholder="Your answer"
                required
                className="bg-background border-input"
              />
            </div>

            {/* Question 2 */}
            <div className="space-y-2">
              <Label htmlFor="q2" className="text-sm font-medium text-foreground">
                2. Which drug acts on both L- and N- type calcium channels...?
              </Label>
              <Input
                id="q2"
                name="q2"
                value={formData.q2}
                onChange={handleInputChange}
                placeholder="Your answer"
                required
                className="bg-background border-input"
              />
            </div>

            {/* Question 3 */}
            <div className="space-y-2">
              <Label htmlFor="q3" className="text-sm font-medium text-foreground">
                3. Hypertensive emergency requires
              </Label>
              <Input
                id="q3"
                name="q3"
                value={formData.q3}
                onChange={handleInputChange}
                placeholder="Your answer"
                required
                className="bg-background border-input"
              />
            </div>

            {/* Question 4 */}
            <div className="space-y-2">
              <Label htmlFor="q4" className="text-sm font-medium text-foreground">
                4. The characteristic feature of acute kidney injury (AKI) is...?
              </Label>
              <Input
                id="q4"
                name="q4"
                value={formData.q4}
                onChange={handleInputChange}
                placeholder="Your answer"
                required
                className="bg-background border-input"
              />
            </div>

            {/* Question 5 */}
            <div className="space-y-2">
              <Label htmlFor="q5" className="text-sm font-medium text-foreground">
                5. The most commonly used type of dialysis is...?
              </Label>
              <Input
                id="q5"
                name="q5"
                value={formData.q5}
                onChange={handleInputChange}
                placeholder="Your answer"
                required
                className="bg-background border-input"
              />
            </div>

            {/* Question 6 */}
            <div className="space-y-2">
              <Label htmlFor="q6" className="text-sm font-medium text-foreground">
                6. Which membrane is used in peritoneal dialysis...?
              </Label>
              <Input
                id="q6"
                name="q6"
                value={formData.q6}
                onChange={handleInputChange}
                placeholder="Your answer"
                required
                className="bg-background border-input"
              />
            </div>

            {/* Question 7 */}
            <div className="space-y-2">
              <Label htmlFor="q7" className="text-sm font-medium text-foreground">
                7. Brand name of 4th generation calcium channel blocker (Cilnidipine) – George Steuart Health
              </Label>
              <Input
                id="q7"
                name="q7"
                value={formData.q7}
                onChange={handleInputChange}
                placeholder="Your answer"
                required
                className="bg-background border-input"
              />
            </div>

            {/* Question 8 */}
            <div className="space-y-2">
              <Label htmlFor="q8" className="text-sm font-medium text-foreground">
                8. Brand name of Metolazone – George Steuart Health
              </Label>
              <Input
                id="q8"
                name="q8"
                value={formData.q8}
                onChange={handleInputChange}
                placeholder="Your answer"
                required
                className="bg-background border-input"
              />
            </div>

            {/* Question 9 */}
            <div className="space-y-2">
              <Label htmlFor="q9" className="text-sm font-medium text-foreground">
                9. Brand name of Darbepoetin alfa IV – Divasa Pharma
              </Label>
              <Input
                id="q9"
                name="q9"
                value={formData.q9}
                onChange={handleInputChange}
                placeholder="Your answer"
                required
                className="bg-background border-input"
              />
            </div>

            {/* Personal Information Section */}
            <div className="pt-4 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="bg-background border-input"
                  />
                </div>

                {/* Station */}
                <div className="space-y-2">
                  <Label htmlFor="station" className="text-sm font-medium text-foreground">
                    Station
                  </Label>
                  <Input
                    id="station"
                    name="station"
                    value={formData.station}
                    onChange={handleInputChange}
                    placeholder="Your station"
                    required
                    className="bg-background border-input"
                  />
                </div>

                {/* Contact Number */}
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-sm font-medium text-foreground">
                    Contact Number
                  </Label>
                  <Input
                    id="contact"
                    name="contact"
                    type="tel"
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="Your contact number"
                    required
                    className="bg-background border-input"
                  />
                </div>

                {/* Specialty */}
                <div className="space-y-2">
                  <Label htmlFor="specialty" className="text-sm font-medium text-foreground">
                    Specialty
                  </Label>
                  <Input
                    id="specialty"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleInputChange}
                    placeholder="Your specialty"
                    required
                    className="bg-background border-input"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-6 text-lg transition-all duration-200 shadow-md hover:shadow-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
