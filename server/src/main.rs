use axum::extract::Query;
use axum::routing::get;
use axum::{Json, Router, ServiceExt};
use clap::Parser;
use clap_num::number_range;
use serde::{Deserialize, Serialize};
use serde_json::Value;
use std::collections::HashMap;

fn port_validator(i: &str) -> Result<i32, String> {
    number_range(i, 1, 65535)
}

#[derive(Serialize, Deserialize)]
struct Product {
    id: i32,
    name: String,
    price: f32,
    description: String,
}

#[derive(Parser)]
struct Cli {
    #[clap(long, value_parser = port_validator)]
    port: Option<i32>,
}

#[tokio::main]
async fn main() {
    let mut port: i32 = 3000;
    let cli = Cli::parse();

    let app = Router::new()
        .route("/product", get(get_products))
        .route("/quadratic", get(quadratic));

    if let Some(i) = cli.port {
        port = i;
    }

    println!("Server listening on 0.0.0.0:{port}...");
    axum::Server::bind(&format!("0.0.0.0:{}", port).parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn get_products() -> Json<Vec<Product>> {
    let mut products: Vec<Product> = vec![];

    for i in 2..=11 {
        let product = Product {
            id: i,
            name: format!("Product {}", i),
            price: 5.0 * i as f32, // Adjust the price as needed
            description: format!("Description of Product {}", i),
        };
        products.push(product);
    }

    Json(products)
}

async fn quadratic(Query(i): Query<HashMap<String, i32>>) -> Result<Json<i32>, &'static str> {
    let n = match i.get("number") {
        None => return Err("Query parameter number was not found."),
        Some(e) => e,
    };

    Ok(Json(n * n))
}
