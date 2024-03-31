terraform {
  backend "s3" {
    bucket = "tawfeeqtak421" 
    key    = "EKS/terraform.tfstate"
    region = "us-east-1S"
  }
}