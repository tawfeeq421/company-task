terraform {
  backend "s3" {
    bucket = "tawfeeqtak421" 
    key    = "EKS/terraform.tfstate"
    region = "ap-south-1"
  }
}
