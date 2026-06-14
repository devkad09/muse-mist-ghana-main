#!/bin/bash

# Array of perfume images to download from Unsplash
declare -A images=(
    ["picky-rose.jpg"]="https://images.unsplash.com/photo-1597318033935-a28cd0fc49bb?w=600&h=800&fit=crop"
    ["extremely-unique.jpg"]="https://images.unsplash.com/photo-1596599810694-c5c28f338296?w=600&h=800&fit=crop"
    ["hayaati.jpg"]="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&h=800&fit=crop"
    ["black-leather-men.jpg"]="https://images.unsplash.com/photo-1600424476335-ab43e2b5a04f?w=600&h=800&fit=crop"
    ["sara-blaze.jpg"]="https://images.unsplash.com/photo-1588318014519-67f18669d13e?w=600&h=800&fit=crop"
    ["elysia-pista-sundae.jpg"]="https://images.unsplash.com/photo-1529963928989-7bf27ffd4d3e?w=600&h=800&fit=crop"
    ["kaly-floral-majesty.jpg"]="https://images.unsplash.com/photo-1631203242306-47c6e9b5d9ba?w=600&h=800&fit=crop"
    ["dolores.jpg"]="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=800&fit=crop"
    ["invicto-intense-single.jpg"]="https://images.unsplash.com/photo-1544838331-ff1de04fcd6d?w=600&h=800&fit=crop"
    ["oniro.jpg"]="https://images.unsplash.com/photo-1591031081480-78d28ba857e8?w=600&h=800&fit=crop"
    ["niro.jpg"]="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=800&fit=crop"
    ["mists-and-invicto.jpg"]="https://images.unsplash.com/photo-1585286551331-e797c1d1c0ed?w=600&h=800&fit=crop"
    ["dolores-athena.jpg"]="https://images.unsplash.com/photo-1597318033935-a28cd0fc49bb?w=600&h=800&fit=crop"
    ["intense-athena.jpg"]="https://images.unsplash.com/photo-1596599810694-c5c28f338296?w=600&h=800&fit=crop"
    ["elitedi-bellezza.jpg"]="https://images.unsplash.com/photo-1588318014519-67f18669d13e?w=600&h=800&fit=crop"
    ["elitedi-storm-elixir.jpg"]="https://images.unsplash.com/photo-1600424476335-ab43e2b5a04f?w=600&h=800&fit=crop"
)

echo "Downloading ${#images[@]} perfume bottle images..."
echo "=================================================="

count=0
for filename in "${!images[@]}"; do
    url="${images[$filename]}"
    echo -n "Downloading $filename... "
    
    if curl -s -L -o "$filename" "$url"; then
        size=$(ls -lh "$filename" | awk '{print $5}')
        echo "✓ ($size)"
        ((count++))
    else
        echo "✗"
    fi
    sleep 0.5
done

echo "=================================================="
echo "✓ Successfully downloaded: $count/${#images[@]}"
echo "All perfume images updated!"
