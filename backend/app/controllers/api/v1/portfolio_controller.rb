module Api
  module V1
    class PortfolioController < ApplicationController
      # GET /api/v1/profile
      def profile
        render json: {
          name: "Your Name",
          title: "Software Engineer",
          tagline: "Compiler Enthusiast",
          bio: "Software engineer with deep expertise in compiler design, programming language implementation, and systems programming.",
          status: "available",
          social: {
            email: "your.email@example.com",
            github: "https://github.com/yourusername",
            linkedin: "https://linkedin.com/in/yourprofile"
          }
        }
      end

      # GET /api/v1/experiences
      def experiences
        render json: [
          {
            id: 1,
            company: "Company Name",
            role: "Senior Compiler Engineer",
            period: "2023 - Present",
            highlights: [
              "Implemented novel optimization passes reducing compilation time by 40%",
              "Designed type inference system for statically-typed language",
              "Led migration to LLVM 17 backend"
            ]
          },
          {
            id: 2,
            company: "Previous Company",
            role: "Software Engineer",
            period: "2020 - 2023",
            highlights: [
              "Built lexer and parser for domain-specific language",
              "Optimized AST traversal algorithms",
              "Contributed to open-source compiler projects"
            ]
          }
        ]
      end

      # GET /api/v1/projects
      def projects
        render json: [
          {
            id: 1,
            name: "Mini-Compiler",
            description: "A teaching compiler for a subset of C, targeting x86-64",
            tags: ["Rust", "LLVM", "x86"],
            link: "https://github.com/yourusername/mini-compiler"
          },
          {
            id: 2,
            name: "Type Inference Engine",
            description: "Hindley-Milner type inference implementation",
            tags: ["OCaml", "Type Theory"],
            link: "https://github.com/yourusername/type-inference"
          },
          {
            id: 3,
            name: "AST Visualizer",
            description: "Interactive tool for exploring abstract syntax trees",
            tags: ["TypeScript", "React", "D3.js"],
            link: "https://github.com/yourusername/ast-visualizer"
          }
        ]
      end

      # POST /api/v1/contact
      def contact
        name = params[:name]
        email = params[:email]
        message = params[:message]

        # In production, you'd send an email or store in database
        # For now, just return success
        if name.present? && email.present? && message.present?
          render json: { success: true, message: "Message received!" }
        else
          render json: { success: false, error: "All fields are required" }, status: :unprocessable_entity
        end
      end
    end
  end
end

